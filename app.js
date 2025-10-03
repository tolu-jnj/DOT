// Data Operating Theory Learning Application JavaScript

// Application data
const appData = {
  "modules": [
    {
      "id": 1,
      "title": "Data Foundation & Digital Transformation",
      "description": "Master the foundational concepts of data theory and digital transformation",
      "concepts": [
        "Three levels of design",
        "Data maturity definitions",
        "Digital transformation taxonomy",
        "Business optimization framework"
      ],
      "exercises": [
        "Classify data initiatives by maturity level",
        "Map business problems to optimization categories",
        "Design a digital transformation strategy"
      ]
    },
    {
      "id": 2,
      "title": "Data Principles & Governance",
      "description": "Learn the 8 core data principles and governance frameworks",
      "concepts": [
        "8 data principles",
        "Data governance vs provenance",
        "Risk beliefs and mitigation",
        "Principle application scenarios"
      ],
      "exercises": [
        "Evaluate data solutions against principles",
        "Design governance policies",
        "Risk assessment activities"
      ]
    },
    {
      "id": 3,
      "title": "Machine Data Architecture",
      "description": "Understand data structures, taxonomy, and ontology",
      "concepts": [
        "Objects, events, structures, state",
        "Atomic vs structure capture",
        "Taxonomy vs ontology",
        "Data classification methods"
      ],
      "exercises": [
        "Classify data types and structures",
        "Design taxonomies and ontologies",
        "Data architecture scenarios"
      ]
    },
    {
      "id": 4,
      "title": "Data Quality & Observability",
      "description": "Master data quality concepts and observability frameworks",
      "concepts": [
        "Four pillars of observability",
        "Quality issue types",
        "Proactive quality management",
        "Risk assessment framework"
      ],
      "exercises": [
        "Quality issue identification",
        "Observability design",
        "Risk mitigation strategies"
      ]
    },
    {
      "id": 5,
      "title": "Business Applications",
      "description": "Apply data theory to real business scenarios",
      "concepts": [
        "Business lenses framework",
        "Team roles and culture",
        "Innovation methodologies",
        "Practical implementations"
      ],
      "exercises": [
        "Business case analysis",
        "Team design scenarios",
        "Implementation planning"
      ]
    }
  ],
  "principles": [
    {
      "name": "Available",
      "definition": "Data exists and can be located when needed",
      "examples": ["Accessible databases", "Documented data sources", "Cataloged datasets"]
    },
    {
      "name": "Accessible",
      "definition": "Data can be retrieved and understood by those who need it",
      "examples": ["User-friendly interfaces", "Proper permissions", "Clear documentation"]
    },
    {
      "name": "Consistent",
      "definition": "Data follows standardized formats and definitions",
      "examples": ["Standardized naming", "Common data formats", "Unified schemas"]
    },
    {
      "name": "Scalable",
      "definition": "Data systems can handle growth in volume and complexity",
      "examples": ["Cloud infrastructure", "Distributed systems", "Elastic storage"]
    },
    {
      "name": "Reusable",
      "definition": "Data can be leveraged across multiple use cases and systems",
      "examples": ["Modular data models", "API-first design", "Flexible schemas"]
    },
    {
      "name": "Interoperable",
      "definition": "Data can work with other systems and datasets",
      "examples": ["Standard protocols", "Common formats", "API compatibility"]
    },
    {
      "name": "Democratized",
      "definition": "Data access is appropriately distributed across the organization",
      "examples": ["Self-service analytics", "Proper training", "Role-based access"]
    }
  ],
  "qualityIssues": [
    {
      "type": "Missing",
      "definition": "Required data is absent when it should be present",
      "examples": ["Empty required fields", "Incomplete records", "Missing datasets"]
    },
    {
      "type": "Incorrect",
      "definition": "Data contains errors or inaccurate values",
      "examples": ["Wrong calculations", "Typos", "Invalid entries"]
    },
    {
      "type": "Imprecise",
      "definition": "Data lacks appropriate granularity or detail",
      "examples": ["Wrong aggregation level", "Insufficient detail", "Poor resolution"]
    },
    {
      "type": "Irrelevant",
      "definition": "Data doesn't serve the intended business purpose",
      "examples": ["Outdated information", "Wrong context", "Misaligned metrics"]
    }
  ],
  "businessOptimizations": [
    "Customer Acquisition",
    "Customer Retention", 
    "Employee Retention",
    "Market Awareness",
    "Expense Management",
    "Time Efficiency",
    "Product Quality"
  ],
  "observabilityPillars": [
    {
      "name": "Lineage",
      "description": "Understanding data flow and dependencies",
      "examples": ["Data source tracking", "Transformation mapping", "Dependency graphs"]
    },
    {
      "name": "Metrics", 
      "description": "Quantitative measures of data performance",
      "examples": ["Quality scores", "Performance indicators", "Usage statistics"]
    },
    {
      "name": "Metadata",
      "description": "Information about data structure and context",
      "examples": ["Data catalogs", "Schema documentation", "Business glossaries"]
    },
    {
      "name": "Logs",
      "description": "Records of data operations and events",
      "examples": ["System logs", "Audit trails", "Error tracking"]
    }
  ]
};

// Application state
let currentModule = null;
let currentSection = 'learn';
let userProgress = {
  modules: {
    1: { progress: 25, sectionsViewed: ['learn'], completed: false },
    2: { progress: 50, sectionsViewed: ['learn', 'exercise'], completed: false },
    3: { progress: 100, sectionsViewed: ['learn', 'exercise', 'quiz'], completed: true },
    4: { progress: 0, sectionsViewed: [], completed: false },
    5: { progress: 75, sectionsViewed: ['learn', 'exercise'], completed: false }
  },
  achievements: ['first-module'],
  overallProgress: 0,
  glossaryViewed: false,
  finalAssessmentPassed: false
};

// Global drag state
let draggedElement = null;

// Achievement definitions
const achievements = [
  { id: 'first-module', name: 'Getting Started', description: 'Complete your first module', icon: '🎯', condition: () => Object.keys(userProgress.modules).length >= 1 },
  { id: 'all-modules', name: 'Module Master', description: 'Complete all 5 modules', icon: '🏆', condition: () => Object.values(userProgress.modules).filter(m => m.completed).length === 5 },
  { id: 'quiz-ace', name: 'Quiz Ace', description: 'Score 100% on any quiz', icon: '🎓', condition: () => Object.values(userProgress.modules).some(m => m.quizScore === 100) },
  { id: 'exercise-champion', name: 'Exercise Champion', description: 'Complete all exercises', icon: '💪', condition: () => Object.values(userProgress.modules).every(m => m.exerciseCompleted) },
  { id: 'glossary-expert', name: 'Glossary Expert', description: 'View all glossary sections', icon: '📚', condition: () => userProgress.glossaryViewed },
  { id: 'final-assessment', name: 'Assessment Complete', description: 'Pass the final assessment', icon: '🌟', condition: () => userProgress.finalAssessmentPassed }
];

// Module content definitions
const moduleContent = {
  1: {
    learn: {
      title: "Data Foundation & Digital Transformation",
      sections: [
        {
          title: "Three Levels of Design",
          content: "Understanding the hierarchical approach to data system design is crucial for successful implementation.",
          details: [
            "Conceptual Level: High-level business requirements and objectives",
            "Business Level: Functional requirements and process definitions", 
            "Technical Level: Implementation details and system specifications"
          ],
          examples: ["Strategic planning documents", "Business process models", "Technical architecture diagrams"]
        },
        {
          title: "Data Maturity Definitions",
          content: "Organizations progress through different levels of data sophistication.",
          details: [
            "Data-Aware: Basic understanding that data has value",
            "Data-Informed: Uses data to validate decisions",
            "Data-Driven: Makes decisions primarily based on data insights"
          ],
          examples: ["Monthly reports", "Real-time dashboards", "Automated decision systems"]
        },
        {
          title: "Digital Transformation Taxonomy",
          content: "A structured approach to categorizing and understanding digital transformation initiatives.",
          details: [
            "Process Digitization: Converting manual processes to digital",
            "Digital Enhancement: Improving existing digital processes",
            "Digital Innovation: Creating new digital-first capabilities"
          ],
          examples: ["Document scanning", "Workflow automation", "AI-powered services"]
        }
      ]
    },
    quiz: [
      {
        question: "Which level of design focuses on high-level business requirements?",
        options: ["Technical", "Business", "Conceptual", "Implementation"],
        correct: 2
      },
      {
        question: "A data-driven organization primarily:",
        options: ["Collects lots of data", "Makes decisions based on data insights", "Has data teams", "Uses spreadsheets"],
        correct: 1
      },
      {
        question: "What is the first stage of digital transformation?",
        options: ["Digital Innovation", "Process Digitization", "Digital Enhancement", "Automation"],
        correct: 1
      }
    ]
  },
  2: {
    learn: {
      title: "Data Principles & Governance",
      sections: [
        {
          title: "The 8 Data Principles",
          content: "Core principles that guide effective data management and utilization.",
          details: [
            "Available: Data exists and can be located when needed",
            "Accessible: Data can be retrieved by those who need it",
            "Consistent: Data follows standardized formats",
            "Scalable: Systems handle growth effectively",
            "Reusable: Data serves multiple purposes",
            "Interoperable: Data works across systems",
            "Democratized: Access is appropriately distributed"
          ],
          examples: ["Data catalogs", "API documentation", "Access control systems"]
        },
        {
          title: "Data Governance vs Provenance",
          content: "Understanding the difference between governing data and tracking its origins.",
          details: [
            "Governance: Policies, processes, and controls for data management",
            "Provenance: Historical record of data's origins and transformations",
            "Both are essential for trustworthy data systems"
          ],
          examples: ["Data stewardship programs", "Lineage tracking", "Audit trails"]
        }
      ]
    },
    quiz: [
      {
        question: "Which principle ensures data can work across different systems?",
        options: ["Scalable", "Interoperable", "Accessible", "Consistent"],
        correct: 1
      },
      {
        question: "Data provenance refers to:",
        options: ["Data governance policies", "Data quality metrics", "Historical record of data origins", "Data access controls"],
        correct: 2
      }
    ]
  },
  3: {
    learn: {
      title: "Machine Data Architecture",
      sections: [
        {
          title: "Data Types: Objects, Events, Structures, State",
          content: "Understanding different types of data and their characteristics.",
          details: [
            "Objects: Entities with properties and relationships",
            "Events: Time-based occurrences with context",
            "Structures: Organized data with defined schemas",
            "State: Current condition or status of systems"
          ],
          examples: ["Customer records", "Transaction logs", "Database schemas", "System status"]
        },
        {
          title: "Taxonomy vs Ontology",
          content: "Two approaches to organizing and classifying information.",
          details: [
            "Taxonomy: Hierarchical classification system",
            "Ontology: Formal representation of knowledge with relationships",
            "Both help organize and understand data domains"
          ],
          examples: ["File folder structures", "Knowledge graphs", "Classification trees"]
        }
      ]
    },
    quiz: [
      {
        question: "Which data type represents time-based occurrences?",
        options: ["Objects", "Events", "Structures", "State"],
        correct: 1
      },
      {
        question: "An ontology differs from taxonomy by including:",
        options: ["More categories", "Relationships between concepts", "Hierarchical structure", "Data types"],
        correct: 1
      }
    ]
  },
  4: {
    learn: {
      title: "Data Quality & Observability",
      sections: [
        {
          title: "Four Pillars of Data Observability",
          content: "Essential components for monitoring and understanding data systems.",
          details: [
            "Lineage: Understanding data flow and dependencies",
            "Metrics: Quantitative measures of data performance",
            "Metadata: Information about data structure and context",
            "Logs: Records of data operations and events"
          ],
          examples: ["Data flow diagrams", "Quality dashboards", "Data catalogs", "System logs"]
        },
        {
          title: "Major Data Quality Issues",
          content: "Common problems that affect data reliability and usability.",
          details: [
            "Missing: Required data is absent",
            "Incorrect: Data contains errors or inaccurate values",
            "Imprecise: Data lacks appropriate granularity",
            "Irrelevant: Data doesn't serve the intended purpose"
          ],
          examples: ["Empty fields", "Wrong calculations", "Aggregated data", "Outdated information"]
        }
      ]
    },
    quiz: [
      {
        question: "Which pillar tracks data flow and dependencies?",
        options: ["Metrics", "Metadata", "Lineage", "Logs"],
        correct: 2
      },
      {
        question: "Data that lacks appropriate granularity is considered:",
        options: ["Missing", "Incorrect", "Imprecise", "Irrelevant"],
        correct: 2
      }
    ]
  },
  5: {
    learn: {
      title: "Business Applications",
      sections: [
        {
          title: "Business Lenses Framework",
          content: "Three perspectives for evaluating data initiatives.",
          details: [
            "People: Human resources, skills, and organizational aspects",
            "Platform: Technology infrastructure and capabilities",
            "Product: Solutions and services delivered to customers"
          ],
          examples: ["Team structure", "Data platforms", "Analytics products"]
        },
        {
          title: "Seven Business Optimizations",
          content: "Key areas where data can drive business improvements.",
          details: [
            "Customer Acquisition: Attracting new customers",
            "Customer Retention: Keeping existing customers",
            "Employee Retention: Maintaining workforce stability",
            "Market Awareness: Understanding market dynamics",
            "Expense Management: Controlling costs effectively",
            "Time Efficiency: Optimizing operational speed",
            "Product Quality: Improving output standards"
          ],
          examples: ["Marketing campaigns", "Customer service", "HR analytics", "Market research"]
        }
      ]
    },
    quiz: [
      {
        question: "The People lens focuses on:",
        options: ["Technology infrastructure", "Human resources and skills", "Customer products", "Market analysis"],
        correct: 1
      },
      {
        question: "Which optimization focuses on attracting new customers?",
        options: ["Customer Retention", "Customer Acquisition", "Market Awareness", "Product Quality"],
        correct: 1
      }
    ]
  }
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  renderDashboard();
  updateProgress();
  checkAchievements();
  setupGlobalEventListeners();
}

function setupGlobalEventListeners() {
  // Setup glossary button click handler
  const glossaryButton = document.querySelector('button[onclick="showGlossary()"]');
  if (glossaryButton) {
    glossaryButton.onclick = showGlossary;
  }
  
  // Setup final assessment button click handler
  const assessmentButton = document.querySelector('button[onclick="showFinalAssessment()"]');
  if (assessmentButton) {
    assessmentButton.onclick = showFinalAssessment;
  }
}

function renderDashboard() {
  const modulesGrid = document.querySelector('.modules-grid');
  modulesGrid.innerHTML = '';
  
  appData.modules.forEach(module => {
    const moduleProgress = userProgress.modules[module.id] || { completed: false, progress: 0 };
    const moduleCard = createModuleCard(module, moduleProgress);
    modulesGrid.appendChild(moduleCard);
  });
  
  renderAchievements();
}

function createModuleCard(module, progress) {
  const card = document.createElement('div');
  card.className = 'module-card card';
  card.onclick = () => openModule(module.id);
  
  const statusClass = progress.completed ? 'status--success' : progress.progress > 0 ? 'status--warning' : 'status--info';
  const statusText = progress.completed ? 'Completed' : progress.progress > 0 ? 'In Progress' : 'Not Started';
  const statusIcon = progress.completed ? '✅' : progress.progress > 0 ? '🔄' : '📚';
  
  card.innerHTML = `
    <div class="card__body">
      <div class="module-status">
        <span class="module-icon">${statusIcon}</span>
        <span class="status ${statusClass}">${statusText}</span>
      </div>
      <h3>${module.title}</h3>
      <p>${module.description}</p>
      <div class="module-concepts">
        <h4>Key Concepts:</h4>
        <div class="concept-list">
          ${module.concepts.map(concept => `<span class="concept-tag">${concept}</span>`).join('')}
        </div>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progress.progress || 0}%"></div>
      </div>
    </div>
  `;
  
  return card;
}

function renderAchievements() {
  const achievementsGrid = document.getElementById('achievements-grid');
  achievementsGrid.innerHTML = '';
  
  achievements.forEach(achievement => {
    const earned = userProgress.achievements.includes(achievement.id);
    const available = achievement.condition();
    
    const badge = document.createElement('div');
    badge.className = `achievement-badge ${earned ? 'earned' : available ? '' : 'locked'}`;
    badge.innerHTML = `
      <div class="achievement-icon">${achievement.icon}</div>
      <div class="achievement-info">
        <h4>${achievement.name}</h4>
        <p>${achievement.description}</p>
      </div>
    `;
    
    achievementsGrid.appendChild(badge);
  });
}

function openModule(moduleId) {
  currentModule = moduleId;
  currentSection = 'learn';
  
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('module-content').classList.remove('hidden');
  
  loadModuleContent(moduleId);
  updateModuleProgress(moduleId);
}

function loadModuleContent(moduleId) {
  const module = appData.modules.find(m => m.id === moduleId);
  const content = moduleContent[moduleId];
  
  document.getElementById('module-title').textContent = module.title;
  
  // Load learning content
  const learnContent = document.getElementById('learn-content');
  if (content && content.learn) {
    learnContent.innerHTML = `
      <h3>${content.learn.title}</h3>
      ${content.learn.sections.map(section => `
        <div class="concept-section">
          <h4>${section.title}</h4>
          <p>${section.content}</p>
          <ul>
            ${section.details.map(detail => `<li>${detail}</li>`).join('')}
          </ul>
          <div class="concept-examples">
            <h5>Examples:</h5>
            <ul>
              ${section.examples.map(example => `<li>${example}</li>`).join('')}
            </ul>
          </div>
        </div>
      `).join('')}
    `;
  }
  
  // Load exercise content
  const exerciseContent = document.getElementById('exercise-content');
  exerciseContent.innerHTML = `
    <h3>Interactive Exercises</h3>
    <p>Practice your understanding with these hands-on activities.</p>
    <div class="exercise-grid">
      ${module.exercises.map((exercise, index) => `
        <div class="exercise-card card" onclick="startExercise(${moduleId}, ${index})">
          <div class="card__body">
            <h4>Exercise ${index + 1}</h4>
            <p>${exercise}</p>
            <button class="btn btn--primary btn--sm">Start Exercise</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  // Load quiz content
  const quizContent = document.getElementById('quiz-content');
  if (content && content.quiz) {
    quizContent.innerHTML = `
      <h3>Knowledge Check Quiz</h3>
      <p>Test your understanding of the key concepts.</p>
      <button class="btn btn--primary" onclick="startQuiz(${moduleId})">Start Quiz</button>
      <div id="quiz-questions" style="display: none;">
        ${content.quiz.map((question, index) => `
          <div class="quiz-question" data-question="${index}">
            <h4>Question ${index + 1}: ${question.question}</h4>
            <div class="quiz-options">
              ${question.options.map((option, optionIndex) => `
                <div class="quiz-option" onclick="selectQuizOption(${index}, ${optionIndex})">
                  <input type="radio" name="question-${index}" value="${optionIndex}">
                  <span>${option}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
        <button class="btn btn--primary mt-16" onclick="submitQuiz(${moduleId})">Submit Quiz</button>
      </div>
    `;
  }
  
  showSection('learn');
}

function showSection(section) {
  currentSection = section;
  
  // Update navigation
  document.querySelectorAll('.section-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === section);
  });
  
  // Show/hide sections
  document.querySelectorAll('.module-section').forEach(sec => {
    sec.classList.toggle('hidden', !sec.id.startsWith(section));
  });
  
  // Update progress
  const moduleProgress = userProgress.modules[currentModule] || { progress: 0, sectionsViewed: [] };
  if (!moduleProgress.sectionsViewed.includes(section)) {
    moduleProgress.sectionsViewed.push(section);
    updateModuleProgressData(currentModule);
  }
}

function startExercise(moduleId, exerciseIndex) {
  const module = appData.modules.find(m => m.id === moduleId);
  const exercise = module.exercises[exerciseIndex];
  
  const modal = document.getElementById('exercise-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  
  modalTitle.textContent = `Exercise: ${exercise}`;
  
  // Create different types of exercises based on module
  if (moduleId === 1) {
    createMaturityLevelExercise(modalBody);
  } else if (moduleId === 2) {
    createPrinciplesExercise(modalBody);
  } else if (moduleId === 3) {
    createDataTypeExercise(modalBody);
  } else if (moduleId === 4) {
    createQualityExercise(modalBody);
  } else if (moduleId === 5) {
    createBusinessExercise(modalBody);
  }
  
  modal.classList.remove('hidden');
  
  // Setup drag and drop after modal is shown
  setTimeout(() => {
    setupDragAndDrop();
  }, 100);
}

function createMaturityLevelExercise(container) {
  container.innerHTML = `
    <div class="drag-drop-exercise">
      <div class="drag-items">
        <h4>Data Initiatives</h4>
        <div class="drag-item" draggable="true" data-answer="aware" data-original-text="Monthly Excel Reports">Monthly Excel Reports</div>
        <div class="drag-item" draggable="true" data-answer="informed" data-original-text="Dashboard for Decision Validation">Dashboard for Decision Validation</div>
        <div class="drag-item" draggable="true" data-answer="driven" data-original-text="Automated ML-based Pricing">Automated ML-based Pricing</div>
        <div class="drag-item" draggable="true" data-answer="aware" data-original-text="Basic Data Collection">Basic Data Collection</div>
        <div class="drag-item" draggable="true" data-answer="informed" data-original-text="A/B Testing Platform">A/B Testing Platform</div>
      </div>
      <div class="drop-zones">
        <h4>Maturity Levels</h4>
        <div class="drop-zone" data-level="aware" data-accepts="aware">Data-Aware</div>
        <div class="drop-zone" data-level="informed" data-accepts="informed">Data-Informed</div>
        <div class="drop-zone" data-level="driven" data-accepts="driven">Data-Driven</div>
      </div>
    </div>
  `;
}

function createPrinciplesExercise(container) {
  container.innerHTML = `
    <div class="drag-drop-exercise">
      <div class="drag-items">
        <h4>Scenarios</h4>
        <div class="drag-item" draggable="true" data-answer="accessible" data-original-text="Users can't understand the data format">Users can't understand the data format</div>
        <div class="drag-item" draggable="true" data-answer="consistent" data-original-text="Different teams use different field names">Different teams use different field names</div>
        <div class="drag-item" draggable="true" data-answer="scalable" data-original-text="System crashes during peak usage">System crashes during peak usage</div>
        <div class="drag-item" draggable="true" data-answer="interoperable" data-original-text="Data can't be shared between systems">Data can't be shared between systems</div>
      </div>
      <div class="drop-zones">
        <h4>Violated Principles</h4>
        <div class="drop-zone" data-level="accessible" data-accepts="accessible">Accessible</div>
        <div class="drop-zone" data-level="consistent" data-accepts="consistent">Consistent</div>
        <div class="drop-zone" data-level="scalable" data-accepts="scalable">Scalable</div>
        <div class="drop-zone" data-level="interoperable" data-accepts="interoperable">Interoperable</div>
      </div>
    </div>
  `;
}

function createDataTypeExercise(container) {
  container.innerHTML = `
    <div class="drag-drop-exercise">
      <div class="drag-items">
        <h4>Data Examples</h4>
        <div class="drag-item" draggable="true" data-answer="objects" data-original-text="Customer Profile">Customer Profile</div>
        <div class="drag-item" draggable="true" data-answer="events" data-original-text="Purchase Transaction">Purchase Transaction</div>
        <div class="drag-item" draggable="true" data-answer="structures" data-original-text="Database Schema">Database Schema</div>
        <div class="drag-item" draggable="true" data-answer="state" data-original-text="System Status: Online">System Status: Online</div>
      </div>
      <div class="drop-zones">
        <h4>Data Types</h4>
        <div class="drop-zone" data-level="objects" data-accepts="objects">Objects</div>
        <div class="drop-zone" data-level="events" data-accepts="events">Events</div>
        <div class="drop-zone" data-level="structures" data-accepts="structures">Structures</div>
        <div class="drop-zone" data-level="state" data-accepts="state">State</div>
      </div>
    </div>
  `;
}

function createQualityExercise(container) {
  container.innerHTML = `
    <div class="drag-drop-exercise">
      <div class="drag-items">
        <h4>Quality Issues</h4>
        <div class="drag-item" draggable="true" data-answer="missing" data-original-text="Required customer email is blank">Required customer email is blank</div>
        <div class="drag-item" draggable="true" data-answer="incorrect" data-original-text="Age listed as 150 years">Age listed as 150 years</div>
        <div class="drag-item" draggable="true" data-answer="imprecise" data-original-text="Sales data aggregated by year only">Sales data aggregated by year only</div>
        <div class="drag-item" draggable="true" data-answer="irrelevant" data-original-text="Historical data from 1990">Historical data from 1990</div>
      </div>
      <div class="drop-zones">
        <h4>Quality Categories</h4>
        <div class="drop-zone" data-level="missing" data-accepts="missing">Missing</div>
        <div class="drop-zone" data-level="incorrect" data-accepts="incorrect">Incorrect</div>
        <div class="drop-zone" data-level="imprecise" data-accepts="imprecise">Imprecise</div>
        <div class="drop-zone" data-level="irrelevant" data-accepts="irrelevant">Irrelevant</div>
      </div>
    </div>
  `;
}

function createBusinessExercise(container) {
  container.innerHTML = `
    <div class="drag-drop-exercise">
      <div class="drag-items">
        <h4>Business Scenarios</h4>
        <div class="drag-item" draggable="true" data-answer="acquisition" data-original-text="Marketing campaign for new users">Marketing campaign for new users</div>
        <div class="drag-item" draggable="true" data-answer="retention" data-original-text="Customer loyalty program">Customer loyalty program</div>
        <div class="drag-item" draggable="true" data-answer="efficiency" data-original-text="Automating manual processes">Automating manual processes</div>
        <div class="drag-item" draggable="true" data-answer="quality" data-original-text="Reducing product defects">Reducing product defects</div>
      </div>
      <div class="drop-zones">
        <h4>Business Optimizations</h4>
        <div class="drop-zone" data-level="acquisition" data-accepts="acquisition">Customer Acquisition</div>
        <div class="drop-zone" data-level="retention" data-accepts="retention">Customer Retention</div>
        <div class="drop-zone" data-level="efficiency" data-accepts="efficiency">Time Efficiency</div>
        <div class="drop-zone" data-level="quality" data-accepts="quality">Product Quality</div>
      </div>
    </div>
  `;
}

function setupDragAndDrop() {
  const dragItems = document.querySelectorAll('.drag-item');
  const dropZones = document.querySelectorAll('.drop-zone');
  
  dragItems.forEach(item => {
    item.addEventListener('dragstart', function(e) {
      draggedElement = this;
      this.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.outerHTML);
      e.dataTransfer.setData('text/plain', this.dataset.answer);
    });
    
    item.addEventListener('dragend', function(e) {
      this.classList.remove('dragging');
      draggedElement = null;
    });
  });
  
  dropZones.forEach(zone => {
    zone.addEventListener('dragover', function(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    });
    
    zone.addEventListener('dragenter', function(e) {
      e.preventDefault();
      this.classList.add('drag-over');
    });
    
    zone.addEventListener('dragleave', function(e) {
      // Only remove class if leaving the zone entirely
      if (!this.contains(e.relatedTarget)) {
        this.classList.remove('drag-over');
      }
    });
    
    zone.addEventListener('drop', function(e) {
      e.preventDefault();
      this.classList.remove('drag-over');
      
      const draggedAnswer = e.dataTransfer.getData('text/plain');
      const acceptedAnswer = this.dataset.accepts;
      
      if (draggedAnswer === acceptedAnswer && draggedElement) {
        // Create a new element for the drop zone
        const newElement = document.createElement('div');
        newElement.textContent = draggedElement.dataset.originalText;
        newElement.className = 'drag-item dropped';
        newElement.style.backgroundColor = 'var(--color-bg-3)';
        newElement.style.border = '1px solid var(--color-success)';
        newElement.style.cursor = 'default';
        
        // Clear the drop zone and add the new element
        this.innerHTML = '';
        this.appendChild(newElement);
        this.classList.add('has-item');
        
        // Remove the original dragged element
        if (draggedElement && draggedElement.parentNode) {
          draggedElement.parentNode.removeChild(draggedElement);
        }
        
        showToast('Correct placement!', 'success');
      } else {
        showToast('Try again - that doesn\'t match!', 'error');
      }
    });
  });
}

function submitExercise() {
  const dropZones = document.querySelectorAll('.drop-zone.has-item');
  const totalZones = document.querySelectorAll('.drop-zone').length;
  
  if (dropZones.length === totalZones) {
    showToast('Exercise completed successfully! Well done!', 'success');
    
    // Update progress
    const moduleProgress = userProgress.modules[currentModule] || { progress: 0, exerciseCompleted: false };
    moduleProgress.exerciseCompleted = true;
    updateModuleProgressData(currentModule);
    
    closeModal();
  } else {
    showToast('Please drag all items to the correct categories before submitting.', 'error');
  }
}

function startQuiz(moduleId) {
  document.getElementById('quiz-questions').style.display = 'block';
  document.querySelector('#quiz-content .btn--primary').style.display = 'none';
}

function selectQuizOption(questionIndex, optionIndex) {
  const questionElement = document.querySelector(`[data-question="${questionIndex}"]`);
  const options = questionElement.querySelectorAll('.quiz-option');
  
  options.forEach((option, index) => {
    option.classList.toggle('selected', index === optionIndex);
  });
}

function submitQuiz(moduleId) {
  const content = moduleContent[moduleId];
  let correctAnswers = 0;
  
  content.quiz.forEach((question, index) => {
    const selectedOption = document.querySelector(`[data-question="${index}"] .quiz-option.selected`);
    const correctIndex = question.correct;
    
    const options = document.querySelectorAll(`[data-question="${index}"] .quiz-option`);
    options.forEach((option, optionIndex) => {
      option.classList.remove('selected');
      if (optionIndex === correctIndex) {
        option.classList.add('correct');
      } else if (selectedOption && selectedOption === option && optionIndex !== correctIndex) {
        option.classList.add('incorrect');
      }
    });
    
    if (selectedOption) {
      const selectedIndex = Array.from(options).indexOf(selectedOption);
      if (selectedIndex === correctIndex) {
        correctAnswers++;
      }
    }
  });
  
  const score = Math.round((correctAnswers / content.quiz.length) * 100);
  
  const quizContent = document.getElementById('quiz-content');
  const scoreDiv = document.createElement('div');
  scoreDiv.className = 'quiz-score';
  scoreDiv.innerHTML = `
    <h3>Quiz Results</h3>
    <p>You scored ${score}% (${correctAnswers}/${content.quiz.length})</p>
    ${score >= 80 ? '<p>Great job! You\'ve mastered this material.</p>' : '<p>Review the material and try again to improve your score.</p>'}
  `;
  
  quizContent.appendChild(scoreDiv);
  
  // Update progress
  const moduleProgress = userProgress.modules[currentModule] || { progress: 0 };
  moduleProgress.quizScore = score;
  moduleProgress.quizCompleted = true;
  updateModuleProgressData(currentModule);
  
  if (score === 100) {
    checkAchievements();
  }
}

function updateModuleProgressData(moduleId) {
  if (!userProgress.modules[moduleId]) {
    userProgress.modules[moduleId] = { progress: 0, sectionsViewed: [] };
  }
  
  const moduleProgress = userProgress.modules[moduleId];
  
  // Calculate progress based on completed activities
  let progress = 0;
  if (moduleProgress.sectionsViewed.includes('learn')) progress += 33;
  if (moduleProgress.exerciseCompleted) progress += 33;
  if (moduleProgress.quizCompleted) progress += 34;
  
  moduleProgress.progress = progress;
  moduleProgress.completed = progress === 100;
  
  updateModuleProgress(moduleId);
  updateOverallProgress();
  checkAchievements();
}

function updateModuleProgress(moduleId) {
  const moduleProgress = userProgress.modules[moduleId] || { progress: 0 };
  const progressFill = document.getElementById('module-progress-fill');
  const progressText = document.getElementById('module-progress-text');
  
  if (progressFill && progressText) {
    progressFill.style.width = `${moduleProgress.progress}%`;
    progressText.textContent = `Progress: ${moduleProgress.progress}%`;
  }
}

function updateOverallProgress() {
  const completedModules = Object.values(userProgress.modules).filter(m => m.completed).length;
  const totalModules = appData.modules.length;
  const overallProgress = Math.round((completedModules / totalModules) * 100);
  
  userProgress.overallProgress = overallProgress;
  
  const overallProgressText = document.getElementById('overall-progress');
  const overallProgressFill = document.getElementById('overall-progress-fill');
  
  if (overallProgressText && overallProgressFill) {
    overallProgressText.textContent = `${overallProgress}%`;
    overallProgressFill.style.width = `${overallProgress}%`;
  }
}

function updateProgress() {
  updateOverallProgress();
}

function checkAchievements() {
  achievements.forEach(achievement => {
    if (!userProgress.achievements.includes(achievement.id) && achievement.condition()) {
      userProgress.achievements.push(achievement.id);
      showToast(`Achievement unlocked: ${achievement.name}!`, 'success');
    }
  });
  
  renderAchievements();
}

function goBackToDashboard() {
  document.getElementById('dashboard').classList.remove('hidden');
  document.getElementById('module-content').classList.add('hidden');
  document.getElementById('glossary').classList.add('hidden');
  document.getElementById('final-assessment').classList.add('hidden');
  
  renderDashboard();
}

function showGlossary() {
  console.log('showGlossary called'); // Debug log
  
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('module-content').classList.add('hidden');
  document.getElementById('final-assessment').classList.add('hidden');
  document.getElementById('glossary').classList.remove('hidden');
  
  userProgress.glossaryViewed = true;
  checkAchievements();
  
  populateGlossary();
}

function populateGlossary() {
  // Populate principles
  const principlesList = document.getElementById('principles-list');
  principlesList.innerHTML = appData.principles.map(principle => `
    <div class="definition-item">
      <h4>${principle.name}</h4>
      <p>${principle.definition}</p>
      <div class="definition-examples">
        <strong>Examples:</strong> ${principle.examples.join(', ')}
      </div>
    </div>
  `).join('');
  
  // Populate quality issues
  const qualityList = document.getElementById('quality-list');
  qualityList.innerHTML = appData.qualityIssues.map(issue => `
    <div class="definition-item">
      <h4>${issue.type}</h4>
      <p>${issue.definition}</p>
      <div class="definition-examples">
        <strong>Examples:</strong> ${issue.examples.join(', ')}
      </div>
    </div>
  `).join('');
  
  // Populate observability pillars
  const observabilityList = document.getElementById('observability-list');
  observabilityList.innerHTML = appData.observabilityPillars.map(pillar => `
    <div class="definition-item">
      <h4>${pillar.name}</h4>
      <p>${pillar.description}</p>
      <div class="definition-examples">
        <strong>Examples:</strong> ${pillar.examples.join(', ')}
      </div>
    </div>
  `).join('');
  
  // Populate business terms
  const businessList = document.getElementById('business-list');
  businessList.innerHTML = appData.businessOptimizations.map(optimization => `
    <div class="definition-item">
      <h4>${optimization}</h4>
      <p>A key area where data initiatives can drive significant business value and competitive advantage.</p>
    </div>
  `).join('');
  
  // Setup search functionality
  const searchInput = document.getElementById('glossary-search');
  searchInput.addEventListener('input', filterGlossary);
}

function showGlossaryTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  
  document.querySelectorAll('.glossary-tab').forEach(tabContent => {
    tabContent.classList.toggle('hidden', !tabContent.id.startsWith(tab));
  });
}

function filterGlossary() {
  const searchTerm = document.getElementById('glossary-search').value.toLowerCase();
  const activeTab = document.querySelector('.glossary-tab:not(.hidden)');
  const items = activeTab.querySelectorAll('.definition-item');
  
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(searchTerm) ? 'block' : 'none';
  });
}

function showFinalAssessment() {
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('module-content').classList.add('hidden');
  document.getElementById('glossary').classList.add('hidden');
  document.getElementById('final-assessment').classList.remove('hidden');
  
  const requirementsList = document.getElementById('assessment-requirements');
  const completedModules = Object.values(userProgress.modules).filter(m => m.completed).length;
  const totalModules = appData.modules.length;
  
  requirementsList.innerHTML = `
    <li ${completedModules === totalModules ? 'class="status--success"' : ''}">
      Complete all ${totalModules} modules (${completedModules}/${totalModules} completed)
    </li>
    <li>Score 80% or higher on the comprehensive assessment</li>
  `;
  
  if (completedModules === totalModules) {
    const assessmentContent = document.getElementById('assessment-content');
    assessmentContent.innerHTML = `
      <div class="card">
        <div class="card__body text-center">
          <h3>Congratulations!</h3>
          <p>You've completed all modules and are ready for the final assessment.</p>
          <button class="btn btn--primary btn--lg" onclick="startFinalAssessment()">
            Start Final Assessment
          </button>
        </div>
      </div>
    `;
  }
}

function startFinalAssessment() {
  const assessmentContent = document.getElementById('assessment-content');
  assessmentContent.innerHTML = `
    <div class="text-center">
      <h3>Final Assessment</h3>
      <p>This comprehensive assessment covers all modules. You need 80% to pass.</p>
      <div class="card" style="margin-top: 20px;">
        <div class="card__body">
          <h4>Assessment Complete</h4>
          <p>Congratulations! You've demonstrated mastery of Data Operating Theory.</p>
          <div class="status status--success">Certification Earned</div>
        </div>
      </div>
    </div>
  `;
  
  userProgress.finalAssessmentPassed = true;
  checkAchievements();
}

function closeModal() {
  document.getElementById('exercise-modal').classList.add('hidden');
}

function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Event listeners for modal
document.getElementById('exercise-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Make functions available globally
window.showGlossary = showGlossary;
window.showGlossaryTab = showGlossaryTab;
window.showFinalAssessment = showFinalAssessment;
window.startFinalAssessment = startFinalAssessment;
window.goBackToDashboard = goBackToDashboard;
window.openModule = openModule;
window.showSection = showSection;
window.startExercise = startExercise;
window.submitExercise = submitExercise;
window.startQuiz = startQuiz;
window.selectQuizOption = selectQuizOption;
window.submitQuiz = submitQuiz;
window.closeModal = closeModal;