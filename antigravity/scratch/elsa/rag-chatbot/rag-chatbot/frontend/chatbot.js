// Standalone Chatbot Widget JS - RAG Integration

(function () {
  // API Endpoint configuration
  const API_BASE_URL = "http://127.0.0.1:8000";

  // State
  let chatHistory = [];
  let isOpen = false;

  // DOM Elements
  let launcher, container, messagesContainer, messageInput, sendButton;

  // Initialize chatbot DOM structure when script loads
  function init() {
    createWidgetElements();
    setupEventListeners();
    addWelcomeMessage();
  }

  // Inject CSS dynamically if not loaded
  function createWidgetElements() {
    // Note: CSS is loaded via chatbot.css link in widget.html
    // But we'll create the DOM here so that it's easy to embed
    const widgetHtml = `
      <div id="chat-widget-launcher" title="Chat with Elsa">
        <i class="fas fa-comments"></i>
      </div>
      <div id="chat-widget-container">
        <div class="chat-widget-header">
          <div class="chat-header-info">
            <div class="chat-bot-avatar">
              <i class="fas fa-robot"></i>
            </div>
            <div>
              <p class="chat-bot-title">Elsa - Energy Assistant</p>
              <p class="chat-bot-status">Online</p>
            </div>
          </div>
          <button class="chat-close-btn" id="chat-close-btn">&times;</button>
        </div>
        <div class="chat-widget-messages" id="chat-widget-messages"></div>
        <div class="chat-widget-footer">
          <div class="chat-input-wrapper">
            <input type="text" id="chat-message-input" placeholder="Ask about Elsa products, calculators..." autocomplete="off">
          </div>
          <button id="chat-send-btn">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    `;

    // Append to body
    const div = document.createElement("div");
    div.id = "elsa-chatbot-wrapper";
    div.innerHTML = widgetHtml;
    document.body.appendChild(div);

    // Get references
    launcher = document.getElementById("chat-widget-launcher");
    container = document.getElementById("chat-widget-container");
    messagesContainer = document.getElementById("chat-widget-messages");
    messageInput = document.getElementById("chat-message-input");
    sendButton = document.getElementById("chat-send-btn");
  }

  function setupEventListeners() {
    // Toggle widget
    launcher.addEventListener("click", toggleChat);
    document.getElementById("chat-close-btn").addEventListener("click", toggleChat);

    // Send button click
    sendButton.addEventListener("click", handleSend);

    // Enter key press in input
    messageInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        handleSend();
      }
    });
  }

  function toggleChat() {
    isOpen = !isOpen;
    if (isOpen) {
      container.classList.add("open");
      launcher.classList.add("open");
      launcher.innerHTML = '<i class="fas fa-times"></i>';
      messageInput.focus();
    } else {
      container.classList.remove("open");
      launcher.classList.remove("open");
      launcher.innerHTML = '<i class="fas fa-comments"></i>';
    }
  }

  function addWelcomeMessage() {
    appendMessage("bot", "Hello! I am **Elsa**, your smart energy assistant. How can I help you today? Ask me about:\n\n* **Smart Geyser / Water Pump Control**\n* **EMS Gateway Products** (USR-N510, USR-M100, USR-M300)\n* **EMS & ROI Calculators**\n* **Comparing EMS vs. Solar**");
  }

  function handleSend() {
    const text = messageInput.value.trim();
    if (!text) return;

    // Append User message
    appendMessage("user", text);
    messageInput.value = "";

    // Show typing indicator
    const typingIndicator = showTypingIndicator();

    // Call API
    sendMessageToAPI(text, typingIndicator);
  }

  function appendMessage(sender, text) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", sender);
    messageDiv.innerHTML = formatMarkdown(text);
    messagesContainer.appendChild(messageDiv);
    scrollToBottom();

    // Update history (excluding welcome message formatting)
    if (text.includes("Hello! I am **Elsa**") === false) {
      chatHistory.push({
        role: sender === "user" ? "user" : "model",
        content: text
      });
    }
  }

  function showTypingIndicator() {
    const indicatorDiv = document.createElement("div");
    indicatorDiv.classList.add("typing-indicator");
    indicatorDiv.innerHTML = `
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    `;
    messagesContainer.appendChild(indicatorDiv);
    scrollToBottom();
    return indicatorDiv;
  }

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  async function sendMessageToAPI(message, typingIndicator) {
    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: message,
          history: chatHistory.slice(-10) // Send last 10 messages for context
        })
      });

      if (!response.ok) {
        throw new Error("Failed to get response from server.");
      }

      const data = await response.json();
      
      // Remove typing indicator
      typingIndicator.remove();

      // Append bot response
      appendMessage("bot", data.answer);

    } catch (error) {
      console.error(error);
      typingIndicator.remove();
      appendMessage("bot", "Sorry, I am having trouble connecting to my brain right now. Please ensure the backend server is running and your API key is configured correctly.");
    }
  }

  // Simple Markdown Formatter
  function formatMarkdown(text) {
    let html = text;

    // Escape HTML first to prevent XSS
    html = html
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Replace Bold (**text** or __text__)
    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/__(.*?)__/g, "<strong>$1</strong>");

    // Replace Italic (*text* or _text_)
    html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
    html = html.replace(/_(.*?)_/g, "<em>$1</em>");

    // Replace Links ([text](url))
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');

    // Replace Bullet Points (* item or - item)
    // First split lines
    const lines = html.split('\n');
    let inList = false;
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      if (line.startsWith('* ') || line.startsWith('- ')) {
        const itemContent = line.substring(2);
        if (!inList) {
          lines[i] = '<ul><li>' + itemContent + '</li>';
          inList = true;
        } else {
          lines[i] = '<li>' + itemContent + '</li>';
        }
      } else {
        if (inList) {
          lines[i] = '</ul>' + lines[i];
          inList = false;
        }
      }
    }
    if (inList) {
      lines[lines.length - 1] += '</ul>';
    }
    html = lines.join('\n');

    // Replace double newlines with paragraphs, single newlines with break tags
    html = html.replace(/\n\n/g, "</p><p>");
    html = html.replace(/\n/g, "<br>");

    // Wrap everything in a paragraph if it doesn't start with one
    if (!html.startsWith("<p>") && !html.startsWith("<ul>")) {
      html = "<p>" + html + "</p>";
    }

    return html;
  }

  // Start initialization
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
