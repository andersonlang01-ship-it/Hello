// ============================================
// GOVERNMENT BRANCHES QUIZ - QUESTIONS DATA
// ============================================
// EDIT THE QUESTIONS BELOW TO CUSTOMIZE THE QUIZ
// Each question should have:
// - question: The question text
// - branch: Which branch it tests (EXECUTIVE, SENATE, or HOUSE)
// - options: Three answer options
// - correctAnswer: Index of correct answer (0, 1, or 2)
// - explanation: Brief explanation of the answer

const QUESTIONS = [
    // ===== EXECUTIVE BRANCH QUESTIONS =====
    {
        question: "Who is the head of the Executive Branch?",
        branch: "EXECUTIVE",
        options: [
            "The President",
            "The Speaker of the House",
            "The Chief Justice"
        ],
        correctAnswer: 0,
        explanation: "The President leads the Executive Branch and is the head of state and government."
    },
    {
        question: "How many Cabinet departments does the President lead?",
        branch: "EXECUTIVE",
        options: [
            "10",
            "15",
            "Over 15"
        ],
        correctAnswer: 2,
        explanation: "The Executive Branch includes the President's Cabinet with over 15 major departments."
    },
    {
        question: "The power to veto legislation belongs to the:",
        branch: "EXECUTIVE",
        options: [
            "Congress",
            "President",
            "Supreme Court"
        ],
        correctAnswer: 1,
        explanation: "The President has the power to veto laws passed by Congress."
    },
    {
        question: "Who leads the Executive Branch during a presidential vacancy?",
        branch: "EXECUTIVE",
        options: [
            "Speaker of the House",
            "President Pro Tempore",
            "Vice President"
        ],
        correctAnswer: 2,
        explanation: "The Vice President assumes the presidency if the President dies, resigns, or is removed."
    },
    
    // ===== SENATE QUESTIONS =====
    {
        question: "How many Senators does each state have?",
        branch: "SENATE",
        options: [
            "1",
            "2",
            "It varies by population"
        ],
        correctAnswer: 1,
        explanation: "Each state has exactly 2 Senators regardless of population."
    },
    {
        question: "How long is a Senate term?",
        branch: "SENATE",
        options: [
            "2 years",
            "4 years",
            "6 years"
        ],
        correctAnswer: 2,
        explanation: "Senators serve 6-year terms with one-third of seats up for election every 2 years."
    },
    {
        question: "The Senate has the sole power to:",
        branch: "SENATE",
        options: [
            "Approve federal judges and key appointments",
            "Impeach federal officials",
            "Approve all spending bills"
        ],
        correctAnswer: 0,
        explanation: "The Senate must confirm presidential appointments including judges and cabinet members."
    },
    {
        question: "How many votes are needed to break a Senate filibuster?",
        branch: "SENATE",
        options: [
            "50 votes",
            "60 votes",
            "67 votes"
        ],
        correctAnswer: 1,
        explanation: "A supermajority of 60 Senate votes is required to invoke cloture and end a filibuster."
    },
    {
        question: "Who presides over the Senate?",
        branch: "SENATE",
        options: [
            "The President Pro Tempore",
            "The Vice President or President Pro Tempore",
            "The Majority Leader"
        ],
        correctAnswer: 1,
        explanation: "The Vice President presides over the Senate, or the President Pro Tempore in their absence."
    },
    
    // ===== HOUSE OF REPRESENTATIVES QUESTIONS =====
    {
        question: "How many Representatives are in the House?",
        branch: "HOUSE OF REPRESENTATIVES",
        options: [
            "100",
            "435",
            "540"
        ],
        correctAnswer: 1,
        explanation: "The House has 435 Representatives, with representation based on state population."
    },
    {
        question: "How long is a House term?",
        branch: "HOUSE OF REPRESENTATIVES",
        options: [
            "2 years",
            "4 years",
            "6 years"
        ],
        correctAnswer: 0,
        explanation: "House members serve 2-year terms for the entire chamber."
    },
    {
        question: "Who is the leader of the House of Representatives?",
        branch: "HOUSE OF REPRESENTATIVES",
        options: [
            "The Majority Leader",
            "The Speaker of the House",
            "The President of the House"
        ],
        correctAnswer: 1,
        explanation: "The Speaker of the House is the chief officer and presides over all House proceedings."
    },
    {
        question: "The House has the sole power to:",
        branch: "HOUSE OF REPRESENTATIVES",
        options: [
            "Impeach federal officials",
            "Ratify treaties",
            "Appoint federal judges"
        ],
        correctAnswer: 0,
        explanation: "Only the House can impeach federal officials including the President."
    },
    {
        question: "What is required to amend the Constitution?",
        branch: "HOUSE OF REPRESENTATIVES",
        options: [
            "Majority vote in House and Senate",
            "Two-thirds vote in both chambers, ratified by 3/4 of states",
            "Presidential approval and Senate vote"
        ],
        correctAnswer: 1,
        explanation: "Constitutional amendments require a 2/3 vote in both chambers and ratification by 3/4 of state legislatures."
    },
    
    // ===== 2.1 - CONGRESS: THE SENATE AND HOUSE OF REPRESENTATIVES =====
    {
        question: "How many members does the House of Representatives have?",
        branch: "HOUSE OF REPRESENTATIVES",
        options: [
            "100",
            "435",
            "538"
        ],
        correctAnswer: 1,
        explanation: "The House has 435 members, apportioned by state population according to the census conducted every 10 years."
    },
    {
        question: "How many years must a person have been a U.S. citizen to serve in the Senate?",
        branch: "SENATE",
        options: [
            "5 years",
            "7 years",
            "9 years"
        ],
        correctAnswer: 2,
        explanation: "Senate candidates must be U.S. citizens for at least 9 years, reflect stability and experience."
    },
    {
        question: "What is the minimum age requirement to serve in the House of Representatives?",
        branch: "HOUSE OF REPRESENTATIVES",
        options: [
            "25",
            "30",
            "35"
        ],
        correctAnswer: 0,
        explanation: "House members must be at least 25 years old, a U.S. citizen for 7 years, and a resident of their state."
    },
    {
        question: "How many senators are elected from each state?",
        branch: "SENATE",
        options: [
            "1",
            "2",
            "It varies by population"
        ],
        correctAnswer: 1,
        explanation: "Each state has exactly 2 senators regardless of population, ensuring equal state representation in the Senate."
    },
    {
        question: "What term length do House members serve?",
        branch: "HOUSE OF REPRESENTATIVES",
        options: [
            "2 years",
            "4 years",
            "6 years"
        ],
        correctAnswer: 0,
        explanation: "House members serve 2-year terms, making them more responsive to constituents but requiring constant campaigning."
    },
    {
        question: "Which chamber of Congress has unlimited debate time?",
        branch: "SENATE",
        options: [
            "House of Representatives",
            "Senate",
            "Both chambers equally"
        ],
        correctAnswer: 1,
        explanation: "The Senate allows unlimited debate, enabling filibusters; the House has strict time limits on debate."
    },
    
    // ===== 2.2 - STRUCTURES, POWERS, AND FUNCTIONS OF CONGRESS =====
    {
        question: "Which of the following is an exclusive power of the Senate?",
        branch: "SENATE",
        options: [
            "Initiating revenue bills",
            "Ratifying treaties",
            "Impeaching federal officials"
        ],
        correctAnswer: 1,
        explanation: "The Senate alone ratifies treaties with a 2/3 majority vote. Impeachment is a House power; treaty ratification belongs to the Senate."
    },
    {
        question: "What is the primary purpose of the Commerce Clause?",
        branch: "SENATE",
        options: [
            "To allow states to tax goods",
            "To give Congress authority to regulate interstate and foreign commerce",
            "To protect small businesses"
        ],
        correctAnswer: 1,
        explanation: "The Commerce Clause grants Congress power to regulate commerce between states, a major source of federal authority."
    },
    {
        question: "Which power belongs exclusively to the House of Representatives?",
        branch: "HOUSE OF REPRESENTATIVES",
        options: [
            "Ratifying treaties",
            "Impeaching federal officials",
            "Confirming Supreme Court justices"
        ],
        correctAnswer: 1,
        explanation: "Only the House can impeach (formally charge) federal officials; the Senate tries the impeachment."
    },
    {
        question: "What is the Necessary and Proper Clause?",
        branch: "SENATE",
        options: [
            "A limit on congressional powers",
            "Authority for Congress to make laws to carry out enumerated powers",
            "A requirement for presidential approval of all laws"
        ],
        correctAnswer: 1,
        explanation: "Also called the Elastic Clause, it allows Congress to pass laws necessary to execute its enumerated powers, greatly expanding federal authority."
    },
    {
        question: "Which of the following is an enumerated power of Congress?",
        branch: "HOUSE OF REPRESENTATIVES",
        options: [
            "Regulating marriage laws",
            "Creating federal courts",
            "Establishing state education systems"
        ],
        correctAnswer: 1,
        explanation: "Congress can establish federal courts; marriage, divorce, and education are typically state powers under the Tenth Amendment."
    },
    {
        question: "What is a concurrent power?",
        branch: "SENATE",
        options: [
            "A power held only by Congress",
            "A power held by both federal and state governments",
            "A power held only by the states"
        ],
        correctAnswer: 1,
        explanation: "Concurrent powers, like taxation, are shared between the federal and state governments."
    },
    {
        question: "How many states must ratify a constitutional amendment for it to pass?",
        branch: "HOUSE OF REPRESENTATIVES",
        options: [
            "3/4 of all states",
            "2/3 of all states",
            "Majority of all states"
        ],
        correctAnswer: 0,
        explanation: "A constitutional amendment requires a 2/3 vote in both chambers and ratification by 3/4 of state legislatures (38 of 50 states)."
    },
    
    // ===== 2.3 - CONGRESSIONAL BEHAVIOR =====
    {
        question: "What is a filibuster?",
        branch: "SENATE",
        options: [
            "A procedure to speed up votes",
            "Unlimited Senate debate to block or delay a vote",
            "A motion to table a bill"
        ],
        correctAnswer: 1,
        explanation: "A filibuster allows a senator to hold the floor indefinitely to delay or prevent a vote. Cloture (60 votes) ends a filibuster."
    },
    {
        question: "What does it take to invoke cloture in the Senate?",
        branch: "SENATE",
        options: [
            "50 votes",
            "60 votes",
            "67 votes"
        ],
        correctAnswer: 1,
        explanation: "A supermajority of 60 Senate votes is required to invoke cloture and end a filibuster."
    },
    {
        question: "Why do members of Congress engage in logrolling?",
        branch: "HOUSE OF REPRESENTATIVES",
        options: [
            "To reduce corruption",
            "To trade votes on different bills to achieve each member's goals",
            "To prevent filibusters"
        ],
        correctAnswer: 1,
        explanation: "Logrolling ('I'll vote for your bill if you vote for mine') helps members pass legislation benefiting their constituents."
    },
    {
        question: "What is the primary reason for partisan polarization in Congress?",
        branch: "SENATE",
        options: [
            "Gerrymandering creating safe districts",
            "Increased media coverage",
            "Campaign finance reform"
        ],
        correctAnswer: 0,
        explanation: "Gerrymandering creates safe districts where primary elections determine winners, incentivizing extreme ideology over compromise."
    },
    {
        question: "What is a standing committee in Congress?",
        branch: "HOUSE OF REPRESENTATIVES",
        options: [
            "A temporary committee for a specific bill",
            "A permanent committee that handles bills in a specific policy area",
            "A committee that only meets during election years"
        ],
        correctAnswer: 1,
        explanation: "Standing committees are permanent legislative committees (like Ways and Means) that review bills within their jurisdiction."
    },
    {
        question: "How do members of Congress typically represent their constituents?",
        branch: "SENATE",
        options: [
            "By voting based on their own judgment regardless of public opinion",
            "By always voting the way the majority of constituents want",
            "By a mix of voting for constituent interests and exercising personal judgment"
        ],
        correctAnswer: 2,
        explanation: "Representatives balance constituent preferences with their own judgment; there's no perfect model—this varies by issue and member."
    },
    
    // ===== 2.4 - THE ROLES AND POWER OF THE PRESIDENCY =====
    {
        question: "Which of the following is an expressed power of the President?",
        branch: "EXECUTIVE",
        options: [
            "Creating new cabinet departments",
            "Commanding the armed forces",
            "Creating laws without Congress"
        ],
        correctAnswer: 1,
        explanation: "The President is Commander-in-Chief of the armed forces (expressed power). Creating laws requires Congress; cabinet changes need approval."
    },
    {
        question: "What is an example of an implied presidential power?",
        branch: "EXECUTIVE",
        options: [
            "Signing bills into law",
            "Impounding funds appropriated by Congress",
            "Declaring war"
        ],
        correctAnswer: 1,
        explanation: "Impoundment (refusing to spend appropriated funds) is an implied power; declaring war is a Congressional power, and signing bills is expressed."
    },
    {
        question: "What is the President's role as Chief Executive?",
        branch: "EXECUTIVE",
        options: [
            "To lead the legislative branch",
            "To enforce and administer federal laws",
            "To appoint all federal judges"
        ],
        correctAnswer: 1,
        explanation: "As Chief Executive, the President oversees the executive branch's enforcement of federal laws through federal agencies and the Cabinet."
    },
    {
        question: "Which power allows the President to appoint judges and cabinet members?",
        branch: "EXECUTIVE",
        options: [
            "Commander-in-Chief power",
            "Appointment power (with Senate confirmation)",
            "Legislative power"
        ],
        correctAnswer: 1,
        explanation: "The President nominates judges and cabinet officials; the Senate confirms them. This is one of the President's most significant powers."
    },
    {
        question: "What is the President's role as Chief Diplomat?",
        branch: "EXECUTIVE",
        options: [
            "To sign all treaties without Congress",
            "To represent the U.S. in foreign affairs and negotiate treaties",
            "To declare war on other nations"
        ],
        correctAnswer: 1,
        explanation: "As Chief Diplomat, the President conducts foreign policy and negotiates treaties, though the Senate must ratify treaties."
    },
    {
        question: "What does 'pardon' power allow the President to do?",
        branch: "EXECUTIVE",
        options: [
            "Forgive a crime and erase the criminal record",
            "Cancel a law passed by Congress",
            "Appoint new judges"
        ],
        correctAnswer: 0,
        explanation: "Presidential pardon power allows the President to forgive federal crimes, though this cannot be used for impeachment convictions."
    },
    
    // ===== 2.5 - CHECKS ON THE PRESIDENCY =====
    {
        question: "How can Congress limit the President's power to wage war?",
        branch: "SENATE",
        options: [
            "By impeaching the President",
            "By using the War Powers Resolution to limit military actions to 60 days without authorization",
            "By refusing to confirm military appointments"
        ],
        correctAnswer: 1,
        explanation: "The War Powers Resolution of 1973 requires the President to notify Congress within 48 hours and limits military action to 60 days without Congressional authorization."
    },
    {
        question: "What is the Senate's role in confirming presidential appointments?",
        branch: "SENATE",
        options: [
            "The Senate automatically approves all appointments",
            "The Senate must confirm key appointments like cabinet members and judges",
            "The Senate has no role in appointments"
        ],
        correctAnswer: 1,
        explanation: "The Senate confirms presidential nominations for cabinet members, federal judges, and other key positions; this is a major check on presidential power."
    },
    {
        question: "How can Congress override a presidential veto?",
        branch: "HOUSE OF REPRESENTATIVES",
        options: [
            "With a simple majority vote",
            "With a 2/3 supermajority in both chambers",
            "Congress cannot override a veto"
        ],
        correctAnswer: 1,
        explanation: "A 2/3 majority in both the House and Senate is needed to override a presidential veto, a significant check on executive power."
    },
    {
        question: "What does impeachment by the House accomplish?",
        branch: "HOUSE OF REPRESENTATIVES",
        options: [
            "It removes the President from office",
            "It formally charges the President with wrongdoing; removal requires a Senate trial",
            "It can only be used for minor violations"
        ],
        correctAnswer: 1,
        explanation: "The House impeaches (charges); the Senate tries the impeachment. Conviction requires 2/3 Senate vote. Impeachment alone doesn't remove the President."
    },
    {
        question: "What is approval rating and why does it matter for presidential power?",
        branch: "EXECUTIVE",
        options: [
            "It's required by the Constitution",
            "High approval ratings increase presidential influence with Congress and the public; low ratings weaken political capital",
            "It determines if the President can veto laws"
        ],
        correctAnswer: 1,
        explanation: "Approval ratings measure public support; high ratings give the President more political influence over Congress and increase governing effectiveness."
    },
    {
        question: "How can the Supreme Court limit presidential power?",
        branch: "EXECUTIVE",
        options: [
            "By impeaching the President",
            "By striking down presidential actions as unconstitutional",
            "By refusing to appoint justices"
        ],
        correctAnswer: 1,
        explanation: "The Supreme Court can declare presidential actions unconstitutional, as it did in Youngstown Steel v. Sawyer limiting President Truman's power."
    },
    
    // ===== 2.6 - EXPANSION OF PRESIDENTIAL POWER =====
    {
        question: "Which Supreme Court case limited presidential power during the executive branch's attempt to seize steel mills?",
        branch: "EXECUTIVE",
        options: [
            "Marbury v. Madison",
            "Youngstown Sheet & Tube Co. v. Sawyer",
            "United States v. Nixon"
        ],
        correctAnswer: 1,
        explanation: "Youngstown (1952) limited President Truman's power, establishing that presidents lack implied power to seize private property without Congressional authorization."
    },
    {
        question: "How did the Great Depression and World War II expand presidential power?",
        branch: "EXECUTIVE",
        options: [
            "Congress passed laws limiting the President",
            "Presidents like FDR and later leaders exercised emergency powers and Congress delegated authority for war and economic crisis",
            "The Supreme Court expanded presidential powers"
        ],
        correctAnswer: 1,
        explanation: "During FDR's New Deal and wartime, Congress delegated significant power to the President to handle national emergencies, greatly expanding executive authority."
    },
    {
        question: "What is an example of how presidents have expanded power through executive orders?",
        branch: "EXECUTIVE",
        options: [
            "Presidents can use executive orders to repeal laws passed by Congress",
            "Presidents can use executive orders to implement policy within executive branch authority",
            "Executive orders have no legal effect"
        ],
        correctAnswer: 1,
        explanation: "Executive orders let presidents implement policy within their authority (e.g., civil rights, environmental protection); they cannot repeal Congressional laws."
    },
    {
        question: "How has the growth of the federal bureaucracy expanded presidential power?",
        branch: "EXECUTIVE",
        options: [
            "It has limited presidential power",
            "Presidents can direct federal agencies to implement policy through regulations",
            "Bureaucrats make all decisions independent of the President"
        ],
        correctAnswer: 1,
        explanation: "The large executive branch bureaucracy allows presidents to expand policy reach through agency regulations and administrative actions."
    },
    {
        question: "What role does the Office of Management and Budget (OMB) play in presidential power?",
        branch: "EXECUTIVE",
        options: [
            "It limits presidential spending",
            "It helps the President control the federal budget and agency regulations",
            "It has no effect on presidential power"
        ],
        correctAnswer: 1,
        explanation: "The OMB allows the President to shape federal spending and agency policy, giving the President significant control over the bureaucracy."
    },
    
    // ===== 2.7 - PRESIDENTIAL COMMUNICATION =====
    {
        question: "What is the primary purpose of the State of the Union address?",
        branch: "EXECUTIVE",
        options: [
            "To declare war on another nation",
            "To inform Congress and the public about the President's agenda and the nation's condition",
            "To veto Congressional legislation"
        ],
        correctAnswer: 1,
        explanation: "The State of the Union allows the President to communicate directly with Congress and the American people about policy priorities and achievements."
    },
    {
        question: "How do presidential press conferences serve as political communication?",
        branch: "EXECUTIVE",
        options: [
            "They have no political purpose",
            "They allow the President to explain policies, respond to criticism, and shape media narrative",
            "They are required by law to be held daily"
        ],
        correctAnswer: 1,
        explanation: "Press conferences are key opportunities for presidents to communicate directly, control their message, and influence public opinion."
    },
    {
        question: "How does social media affect presidential communication?",
        branch: "EXECUTIVE",
        options: [
            "It has eliminated traditional media",
            "It allows presidents to bypass media filters and speak directly to the public instantaneously",
            "It weakens presidential authority"
        ],
        correctAnswer: 1,
        explanation: "Social media (especially Twitter/X) lets presidents communicate directly to millions, reducing reliance on traditional media gatekeepers."
    },
    {
        question: "What is the 'bully pulpit' in presidential communication?",
        branch: "EXECUTIVE",
        options: [
            "The President's control of the Department of Defense",
            "The President's platform to persuade the public and influence policy through rhetoric and media attention",
            "A weekly television show"
        ],
        correctAnswer: 1,
        explanation: "The 'bully pulpit' refers to the President's unique platform to shape public opinion and pressure Congress through speeches and public communication."
    }
];

// ============================================
// QUIZ LOGIC & FUNCTIONALITY
// ============================================

let currentQuestion = null;
let currentQuestionIndex = -1;
let correctCount = 0;
let totalCount = 0;
let answered = false;

// ===== CAT HUNGER TIMER VARIABLES =====
let hungerTimer = 15; // Seconds until cat starves
let hungerInterval = null;
let gameOver = false;
const HUNGER_DURATION = 15; // Cat starves after 15 seconds without eating

// DOM Elements
const questionText = document.getElementById('questionText');
const optionBtns = [
    document.getElementById('optionA'),
    document.getElementById('optionB'),
    document.getElementById('optionC')
];
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const correctCountDisplay = document.getElementById('correctCount');
const totalCountDisplay = document.getElementById('totalCount');
const hungerTimerDisplay = document.getElementById('hungerTimer');
const hungerBar = document.getElementById('hungerBar');
const hungerText = document.getElementById('hungerText');
const cat = document.getElementById('cat');
const food = document.getElementById('food');
const gameOverScreen = document.getElementById('gameOverScreen');
const finalScore = document.getElementById('finalScore');

// Event Listeners
nextBtn.addEventListener('click', loadNextQuestion);
optionBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => selectAnswer(index));
});

/**
 * Start the hunger timer - cat will starve in 15 seconds
 */
function startHungerTimer() {
    // Clear any existing timer
    if (hungerInterval) clearInterval(hungerInterval);
    
    hungerTimer = HUNGER_DURATION;
    
    hungerInterval = setInterval(() => {
        hungerTimer--;
        hungerTimerDisplay.textContent = hungerTimer;
        
        // Update hunger bar width (0-100%)
        const hungerPercent = (hungerTimer / HUNGER_DURATION) * 100;
        hungerBar.style.width = hungerPercent + '%';
        
        // Warning when low on time
        if (hungerTimer <= 5) {
            hungerText.classList.add('hunger-warning');
        } else {
            hungerText.classList.remove('hunger-warning');
        }
        
        // Cat starves
        if (hungerTimer <= 0) {
            starveGame();
        }
    }, 1000);
}

/**
 * Feed the cat - resets hunger timer
 */
function feedCat() {
    if (gameOver) return;
    
    // Animate cat eating
    cat.classList.add('eating');
    setTimeout(() => cat.classList.remove('eating'), 500);
    
    // Animate food falling
    food.classList.remove('falling');
    void food.offsetWidth; // Trigger reflow to restart animation
    food.classList.add('falling');
    
    // Reset hunger timer
    hungerTimer = HUNGER_DURATION;
    hungerTimerDisplay.textContent = hungerTimer;
    hungerBar.style.width = '100%';
    hungerText.classList.remove('hunger-warning');
    hungerText.textContent = 'Next meal in: ' + hungerTimer + 's';
}

/**
 * End game - cat starved
 */
function starveGame() {
    gameOver = true;
    clearInterval(hungerInterval);
    
    // Disable all buttons
    optionBtns.forEach(btn => btn.disabled = true);
    nextBtn.disabled = true;
    
    // Make cat look sad
    cat.classList.add('starving');
    
    // Show game over screen
    finalScore.textContent = correctCount;
    gameOverScreen.classList.add('show');
}

/**
 * Load the next random question and reset UI
 */
function loadNextQuestion() {
    // Pick a random question
    currentQuestionIndex = Math.floor(Math.random() * QUESTIONS.length);
    currentQuestion = QUESTIONS[currentQuestionIndex];
    
    // Reset UI state
    answered = false;
    feedback.textContent = '';
    feedback.className = 'feedback';
    
    // Display question and options
    questionText.textContent = currentQuestion.question;
    optionBtns.forEach((btn, index) => {
        btn.textContent = currentQuestion.options[index];
        btn.className = 'option-btn';
        btn.disabled = false;
    });
    
    // Update button text
    nextBtn.textContent = 'Next Question';
}

/**
 * Handle answer selection
 * @param {number} selectedIndex - Index of the selected answer (0, 1, or 2)
 */
function selectAnswer(selectedIndex) {
    // Prevent double-clicking or playing after game over
    if (answered || gameOver) return;
    answered = true;
    
    // Increment total count
    totalCount++;
    totalCountDisplay.textContent = totalCount;
    
    // Check if answer is correct
    const isCorrect = selectedIndex === currentQuestion.correctAnswer;
    
    // Highlight correct answer
    optionBtns[currentQuestion.correctAnswer].classList.add('correct');
    
    // Highlight selected answer
    if (!isCorrect) {
        optionBtns[selectedIndex].classList.add('incorrect');
    }
    
    // Show feedback
    if (isCorrect) {
        feedback.textContent = '✓ Correct! 🍖 Cat ate!';
        feedback.classList.add('correct-feedback');
        correctCount++;
        correctCountDisplay.textContent = correctCount;
        
        // Feed the cat when answer is correct
        feedCat();
    } else {
        feedback.textContent = '✗ Incorrect. ' + currentQuestion.explanation;
        feedback.classList.add('incorrect-feedback');
    }
    
    // Disable all buttons until next question
    optionBtns.forEach(btn => btn.disabled = true);
    
    // Update button to show "Next Question"
    nextBtn.textContent = 'Next Question →';
}

// Load the first question and start hunger timer when page loads
loadNextQuestion();
startHungerTimer();
