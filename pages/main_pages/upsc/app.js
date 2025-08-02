// Application Data
const appData = {
  sections: [
    {
      id: "constitution",
      title: "Indian Constitution",
      icon: "⚖️",
      description: "Complete study of Indian Constitution with articles, amendments, and analysis",
      categories: [
        {
          name: "Constitutional Articles",
          topics: ["Articles 1-50: The Union and Its Territory", "Articles 51-100: Union Executive", "Articles 101-150: State Executive", "Articles 151-200: Union-State Relations", "Articles 201-250: Finance and Trade", "Articles 251-300: Services", "Articles 301-395: Special Provisions"]
        },
        {
          name: "Amendments",
          topics: ["1st-10th Amendments", "11th-25th Amendments", "26th-50th Amendments", "51st-75th Amendments", "76th-103rd Amendments"]
        },
        {
          name: "Parts of Constitution",
          topics: ["Part I: The Union and Its Territory", "Part II: Citizenship", "Part III: Fundamental Rights", "Part IV: Directive Principles", "Part V: The Union", "Part VI: The States", "Part XI: Relations between Union and States"]
        },
        {
          name: "Schedules",
          topics: ["First Schedule: States and UTs", "Second Schedule: Provisions for Officials", "Third Schedule: Forms of Oaths", "Seventh Schedule: Distribution of Powers", "Eighth Schedule: Languages", "Ninth Schedule: Acts and Regulations", "Twelfth Schedule: Municipalities"]
        }
      ]
    },
    {
      id: "current-affairs",
      title: "Current Affairs",
      icon: "📰",
      description: "Latest developments in national and international affairs",
      categories: [
        {
          name: "Daily Current Affairs",
          topics: ["Today's Headlines", "Government Policies", "Economic Updates", "International News", "Science & Technology", "Environment News"]
        },
        {
          name: "Weekly Compilations",
          topics: ["Week 1-8: January-February", "Week 9-16: March-April", "Week 17-24: May-June", "Week 25-32: July-August", "Week 33-40: September-October", "Week 41-48: November-December"]
        },
        {
          name: "Monthly Analysis",
          topics: ["PIB Analysis", "Editorial Analysis", "Yojana Magazine", "Kurukshetra Magazine", "Economic Survey", "Budget Analysis"]
        }
      ]
    },
    {
      id: "general-studies",
      title: "General Studies",
      icon: "📚",
      description: "Comprehensive coverage of all GS papers for UPSC Mains",
      categories: [
        {
          name: "GS Paper 1",
          topics: ["Indian Heritage and Culture", "History and Geography of World and Society", "Modern Indian History", "World History", "Indian Society", "Geography"]
        },
        {
          name: "GS Paper 2",
          topics: ["Governance, Constitution, Polity", "Social Justice and International Relations", "Government Policies", "Bilateral Relations", "International Organizations"]
        },
        {
          name: "GS Paper 3",
          topics: ["Technology, Economic Development", "Environment, Security and Disaster Management", "Science and Technology", "Economic Development", "Environment and Ecology"]
        },
        {
          name: "GS Paper 4",
          topics: ["Ethics, Integrity and Aptitude", "Emotional Intelligence", "Case Studies", "Applied Ethics", "Public Service Values"]
        }
      ]
    },
    {
      id: "optional-subjects",
      title: "Optional Subjects",
      icon: "🎯",
      description: "Detailed study materials for UPSC optional subjects",
      categories: [
        {
          name: "Humanities",
          topics: ["History", "Geography", "Political Science", "Sociology", "Psychology", "Philosophy", "Public Administration"]
        },
        {
          name: "Literature",
          topics: ["Hindi Literature", "English Literature", "Sanskrit Literature", "Urdu Literature", "Bengali Literature", "Tamil Literature", "Telugu Literature"]
        },
        {
          name: "Science & Commerce",
          topics: ["Physics", "Chemistry", "Mathematics", "Statistics", "Economics", "Commerce & Accountancy", "Management"]
        }
      ]
    },
    {
      id: "literature",
      title: "Literature & Essays",
      icon: "✍️",
      description: "Essay writing, comprehension, and literature study",
      categories: [
        {
          name: "Essay Writing",
          topics: ["Essay Techniques", "Sample Essays", "Current Topics", "Philosophical Essays", "Social Issues", "Economic Essays"]
        },
        {
          name: "Comprehension",
          topics: ["Reading Comprehension", "Précis Writing", "Note Making", "Vocabulary Building"]
        }
      ]
    },
    {
      id: "resources",
      title: "Study Resources",
      icon: "📖",
      description: "Additional study materials and examination resources",
      categories: [
        {
          name: "Question Papers",
          topics: ["Previous Year Papers", "Solved Papers", "Sample Papers", "Mock Tests", "Practice Sets"]
        },
        {
          name: "Reference Materials",
          topics: ["NCERT Books", "Standard Books", "Government Reports", "Websites", "Journals and Magazines"]
        }
      ]
    }
  ]
};

// Application State
let currentSection = 'dashboard';
let timerRunning = false;
let timerInterval = null;
let timerSeconds = 0;
let bookmarkedTopics = [];
let userSettings = {
  theme: 'auto',
  studyGoal: 4,
  notifications: 'enabled'
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing UPSC Prep Hub...');
  loadUserSettings();
  applyTheme();
  initializeNavigation();
  populateCategories();
  initializeSearch();
  loadBookmarks();
  initializeTimer();
});

// Navigation Functions
function initializeNavigation() {
  console.log('Initializing navigation...');
  
  // Header navigation
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const section = this.getAttribute('data-section');
      console.log('Nav item clicked:', section);
      if (section) {
        navigateToSection(section);
      }
    });
  });
  
  // Section cards on dashboard
  const sectionCards = document.querySelectorAll('.section-card');
  sectionCards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const section = this.getAttribute('data-section');
      console.log('Section card clicked:', section);
      if (section) {
        navigateToSection(section);
      }
    });
  });
}

function navigateToSection(sectionId) {
  console.log('Navigating to section:', sectionId);
  
  // Update navigation active state
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-section') === sectionId) {
      item.classList.add('active');
    }
  });
  
  // Update sections visibility
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
    if (section.id === sectionId) {
      section.classList.add('active');
      section.classList.add('fade-in');
      setTimeout(() => section.classList.remove('fade-in'), 300);
    }
  });
  
  currentSection = sectionId;
  hideSearch();
}

// Categories Population
function populateCategories() {
  console.log('Populating categories...');
  
  appData.sections.forEach(section => {
    const container = document.getElementById(`${section.id}-categories`);
    if (container) {
      container.innerHTML = '';
      
      section.categories.forEach(category => {
        const categoryCard = createCategoryCard(category, section.id);
        container.appendChild(categoryCard);
      });
    }
  });
}

function createCategoryCard(category, sectionId) {
  const card = document.createElement('div');
  card.className = 'category-card';
  
  const header = document.createElement('div');
  header.className = 'category-header';
  header.innerHTML = `<h3>${category.name}</h3>`;
  
  const topicsList = document.createElement('div');
  topicsList.className = 'topics-list';
  
  category.topics.forEach(topic => {
    const topicItem = document.createElement('div');
    topicItem.className = 'topic-item';
    if (bookmarkedTopics.includes(topic)) {
      topicItem.classList.add('bookmarked');
    }
    
    topicItem.innerHTML = `
      <span class="topic-text">${topic}</span>
      <span class="topic-arrow">→</span>
    `;
    
    topicItem.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Topic clicked:', topic);
      openTopicModal(topic, category.name, sectionId);
    });
    
    topicsList.appendChild(topicItem);
  });
  
  card.appendChild(header);
  card.appendChild(topicsList);
  
  return card;
}

// Search Functionality
function initializeSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
      }
      
      const results = searchContent(query);
      displaySearchResults(results);
    });
  }
}

function searchContent(query) {
  const results = [];
  
  appData.sections.forEach(section => {
    section.categories.forEach(category => {
      category.topics.forEach(topic => {
        if (topic.toLowerCase().includes(query)) {
          results.push({
            topic: topic,
            category: category.name,
            section: section.title,
            sectionId: section.id
          });
        }
      });
    });
  });
  
  return results;
}

function displaySearchResults(results) {
  const searchResults = document.getElementById('searchResults');
  
  if (!searchResults) return;
  
  if (results.length === 0) {
    searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
    return;
  }
  
  searchResults.innerHTML = '';
  
  results.forEach(result => {
    const resultItem = document.createElement('div');
    resultItem.className = 'search-result-item';
    resultItem.innerHTML = `
      <div>
        <strong>${result.topic}</strong>
        <div style="font-size: 12px; color: var(--color-text-secondary);">
          ${result.section} → ${result.category}
        </div>
      </div>
    `;
    
    resultItem.addEventListener('click', () => {
      navigateToSection(result.sectionId);
      openTopicModal(result.topic, result.category, result.sectionId);
      hideSearch();
    });
    
    searchResults.appendChild(resultItem);
  });
}

function toggleSearch() {
  console.log('Toggle search called');
  const searchContainer = document.querySelector('.search-container');
  const searchInput = document.getElementById('searchInput');
  
  if (searchContainer && searchContainer.classList.contains('hidden')) {
    searchContainer.classList.remove('hidden');
    if (searchInput) {
      searchInput.focus();
    }
  } else {
    hideSearch();
  }
}

function hideSearch() {
  const searchContainer = document.querySelector('.search-container');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  
  if (searchContainer) {
    searchContainer.classList.add('hidden');
  }
  if (searchInput) {
    searchInput.value = '';
  }
  if (searchResults) {
    searchResults.innerHTML = '';
  }
}

// Modal Functions
function openTopicModal(topic, category, sectionId) {
  console.log('Opening modal for:', topic);
  const modal = document.getElementById('contentModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (modal && modalTitle && modalBody) {
    modalTitle.textContent = topic;
    modalBody.innerHTML = generateTopicContent(topic, category, sectionId);
    
    modal.classList.remove('hidden');
    modal.setAttribute('data-current-topic', topic);
  }
}

function generateTopicContent(topic, category, sectionId) {
  return `
    <div class="topic-content">
      <div class="topic-meta">
        <span class="status status--info">${category}</span>
        <span class="topic-section">${getSectionTitle(sectionId)}</span>
      </div>
      
      <div class="topic-description">
        <h4>Overview</h4>
        <p>This section covers comprehensive study material for "${topic}". The content includes detailed explanations, key concepts, important facts, and examination-oriented insights.</p>
        
        <h4>Key Points</h4>
        <ul>
          <li>Fundamental concepts and definitions</li>
          <li>Historical background and evolution</li>
          <li>Current relevance and applications</li>
          <li>Examination perspective and previous year questions</li>
          <li>Related topics and cross-references</li>
        </ul>
        
        <h4>Study Tips</h4>
        <p>Focus on understanding the core concepts rather than rote memorization. Make notes of important points and practice previous year questions related to this topic.</p>
        
        <div class="topic-stats">
          <div class="stat-item">
            <span class="stat-label">Estimated Study Time:</span>
            <span class="stat-value">2-3 hours</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Difficulty Level:</span>
            <span class="stat-value">Moderate</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Last Updated:</span>
            <span class="stat-value">January 2024</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getSectionTitle(sectionId) {
  const section = appData.sections.find(s => s.id === sectionId);
  return section ? section.title : '';
}

function closeModal() {
  const modal = document.getElementById('contentModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.removeAttribute('data-current-topic');
  }
}

// Timer Functions
function initializeTimer() {
  updateTimerDisplay();
}

function startTimer() {
  console.log('Start timer called');
  if (!timerRunning) {
    timerRunning = true;
    timerInterval = setInterval(() => {
      timerSeconds++;
      updateTimerDisplay();
    }, 1000);
    showNotification('Timer started', 'success');
  }
}

function pauseTimer() {
  console.log('Pause timer called');
  if (timerRunning) {
    timerRunning = false;
    clearInterval(timerInterval);
    showNotification('Timer paused', 'info');
  }
}

function resetTimer() {
  console.log('Reset timer called');
  timerRunning = false;
  clearInterval(timerInterval);
  timerSeconds = 0;
  updateTimerDisplay();
  showNotification('Timer reset', 'info');
}

function updateTimerDisplay() {
  const display = document.getElementById('timerDisplay');
  if (display) {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    
    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}

// Bookmark Functions
function bookmarkTopic() {
  const modal = document.getElementById('contentModal');
  const currentTopic = modal ? modal.getAttribute('data-current-topic') : null;
  
  if (currentTopic) {
    if (bookmarkedTopics.includes(currentTopic)) {
      bookmarkedTopics = bookmarkedTopics.filter(topic => topic !== currentTopic);
      showNotification('Bookmark removed', 'info');
    } else {
      bookmarkedTopics.push(currentTopic);
      showNotification('Topic bookmarked', 'success');
    }
    
    updateBookmarkDisplay();
  }
}

function loadBookmarks() {
  bookmarkedTopics = [];
}

function updateBookmarkDisplay() {
  document.querySelectorAll('.topic-item').forEach(item => {
    const topicText = item.querySelector('.topic-text');
    if (topicText && bookmarkedTopics.includes(topicText.textContent)) {
      item.classList.add('bookmarked');
    } else {
      item.classList.remove('bookmarked');
    }
  });
}

// Theme Functions
function toggleTheme() {
  console.log('Toggle theme called');
  const currentTheme = document.documentElement.getAttribute('data-color-scheme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-color-scheme', newTheme);
  userSettings.theme = newTheme;
  
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  }
  
  showNotification(`Switched to ${newTheme} theme`, 'success');
}

function applyTheme() {
  if (userSettings.theme === 'auto') {
    document.documentElement.removeAttribute('data-color-scheme');
  } else {
    document.documentElement.setAttribute('data-color-scheme', userSettings.theme);
  }
  
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    const isDark = userSettings.theme === 'dark' || 
      (userSettings.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    themeToggle.textContent = isDark ? '☀️' : '🌙';
  }
}

// Settings Functions
function openSettings() {
  console.log('Open settings called');
  const modal = document.getElementById('settingsModal');
  const themeSelect = document.getElementById('themeSelect');
  const studyGoal = document.getElementById('studyGoal');
  const notifications = document.getElementById('notifications');
  
  if (modal) {
    if (themeSelect) themeSelect.value = userSettings.theme;
    if (studyGoal) studyGoal.value = userSettings.studyGoal;
    if (notifications) notifications.value = userSettings.notifications;
    
    modal.classList.remove('hidden');
  }
}

function closeSettings() {
  const modal = document.getElementById('settingsModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function saveSettings() {
  const themeSelect = document.getElementById('themeSelect');
  const studyGoal = document.getElementById('studyGoal');
  const notifications = document.getElementById('notifications');
  
  if (themeSelect) userSettings.theme = themeSelect.value;
  if (studyGoal) userSettings.studyGoal = parseInt(studyGoal.value);
  if (notifications) userSettings.notifications = notifications.value;
  
  applyTheme();
  closeSettings();
  showNotification('Settings saved successfully', 'success');
}

function loadUserSettings() {
  userSettings = {
    theme: 'auto',
    studyGoal: 4,
    notifications: 'enabled'
  };
}

// Notification Functions
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification status status--${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 3000;
    padding: 12px 16px;
    border-radius: 8px;
    font-weight: 500;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-in forwards';
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Add CSS for notification animations and additional styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  .topic-meta {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
    align-items: center;
  }
  
  .topic-section {
    color: var(--color-text-secondary);
    font-size: 14px;
  }
  
  .topic-stats {
    margin-top: 24px;
    padding: 16px;
    background: var(--color-bg-1);
    border-radius: 8px;
  }
  
  .stat-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  
  .stat-item:last-child {
    margin-bottom: 0;
  }
  
  .stat-label {
    font-weight: 500;
    color: var(--color-text-secondary);
  }
  
  .stat-value {
    color: var(--color-text);
    font-weight: 600;
  }
`;
document.head.appendChild(style);

// Event Listeners
document.addEventListener('click', (e) => {
  // Close modals when clicking outside
  if (e.target.classList.contains('modal')) {
    closeModal();
    closeSettings();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeSettings();
    hideSearch();
  }
});

// Make functions globally available
window.toggleSearch = toggleSearch;
window.toggleTheme = toggleTheme;
window.openSettings = openSettings;
window.closeSettings = closeSettings;
window.saveSettings = saveSettings;
window.closeModal = closeModal;
window.bookmarkTopic = bookmarkTopic;
window.startTimer = startTimer;
window.pauseTimer = pauseTimer;
window.resetTimer = resetTimer;