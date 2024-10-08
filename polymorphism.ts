abstract class Notifications {
    abstract send(): void;
  }
  
  class EmailNotification extends Notifications {
    send() {
      console.log('Sending email notification...');
    }
  }
  
  class SMSNotification extends Notifications {
    send() {
      console.log('Sending SMS notification...');
    }
  }
  
  function sendNotification(notification: Notifications) {
    notification.send();
  }
  
  const email = new EmailNotification();
  const sms = new SMSNotification();
  
  sendNotification(email); // Sending email notification...
  sendNotification(sms);   // Sending SMS notification...
  