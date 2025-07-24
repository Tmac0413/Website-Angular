import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.html',
  styleUrls: ['./messages.css']
})
export class MessagesComponent {
  sender = 'John';
  messageText = '';
  messages: { sender: string; text: string; timestamp: string }[] = [];

  @ViewChild('chatMessages') chatMessages!: ElementRef;

  constructor() {
    const saved = localStorage.getItem('messages');
    this.messages = saved ? JSON.parse(saved) : [];
  }

  setSender(name: string) {
    this.sender = name;
  }

  sendMessage() {
    const timestamp = new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });

    const message = {
      sender: this.sender,
      text: this.messageText,
      timestamp
    };

    this.messages.push(message);
    localStorage.setItem('messages', JSON.stringify(this.messages));

    this.messageText = '';

    // Scroll to bottom after view updates
    setTimeout(() => {
      if (this.chatMessages?.nativeElement) {
        this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
      }
    }, 0);
  }

  clearMessages() {
    this.messages = [];
    localStorage.clear();
  }
}
