#!/usr/bin/env python3
from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
import urllib.request
import urllib.error

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()
    
    def do_POST(self):
        if self.path == '/api/chat':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            
            try:
                data = json.loads(body)
                message = data.get('message', '')
                
                # Call Mistral AI API
                mistral_payload = {
                    'model': 'mistral-tiny',
                    'messages': [
                        {'role': 'system', 'content': 'You are a cute cat. Respond in a fun, playful way as a cat would.'},
                        {'role': 'user', 'content': message}
                    ]
                }
                
                print(f"Sending to Mistral API: {json.dumps(mistral_payload)}")
                
                req = urllib.request.Request(
                    'https://api.mistral.ai/v1/chat/completions',
                    data=json.dumps(mistral_payload).encode('utf-8'),
                    headers={
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer CILc8XBiQgngK5FeMATeMr4LYzWDfdbA'
                    }
                )
                
                response = urllib.request.urlopen(req, timeout=30)
                response_text = response.read().decode('utf-8')
                print(f"Mistral API response: {response_text}")
                response_data = json.loads(response_text)
                reply = response_data['choices'][0]['message']['content']
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'reply': reply}).encode('utf-8'))
                
            except urllib.error.HTTPError as e:
                error_body = e.read().decode('utf-8')
                print(f"Mistral API HTTP Error {e.code}: {error_body}")
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': f'API Error {e.code}: {error_body}'}).encode('utf-8'))
            except Exception as e:
                import traceback
                print(f'Error: {str(e)}')
                traceback.print_exc()
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': str(e)}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()
    
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

if __name__ == '__main__':
    server = HTTPServer(('localhost', 8000), CORSRequestHandler)
    print('Server running on http://localhost:8000')
    server.serve_forever()
