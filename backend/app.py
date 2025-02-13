from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv(dotenv_path='/.env')
print(f"MAIL_USERNAME: {os.getenv('MAIL_USERNAME')}")
print(f"MAIL_PASSWORD: {os.getenv('MAIL_PASSWORD')}")

app = Flask(__name__)

CORS(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_DEFAULT_SENDER')

mail = Mail(app)

@app.route('/')
def home():
    return "Hii"

@app.route('/send_email', methods=['POST'])
def send_email():
    try:
        data = request.json
        if not data or not data.get('name') or not data.get('email') or not data.get('message'):
            return jsonify({'status': 'error', 'message': 'Missing fields'}), 400
        
        name = data['name']
        email = data['email']
        message = data['message']

        msg = Message(subject=f'New message from {name} <{email}>',
                      recipients=[email],
                      body=message)

        mail.send(msg)
        return jsonify({'status': 'success', 'message': 'Email sent successfully!'}), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
