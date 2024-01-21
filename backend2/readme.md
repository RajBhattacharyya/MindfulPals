# Project Name 🚀

## MindfulPals 🐾😊

### Introduction 🌟

Welcome to the Virtual Pet Therapy for Kids project! This open-source initiative aims to bring joy to the lives of kids who may feel lonely, restricted at home, or prefer introverted activities. By combining emotion recognition using machine learning with the charm of virtual pets, our project provides a therapeutic and entertaining experience for young users.

### Features 🎉

- **Emotion Recognition:** Utilizes advanced machine learning to identify emotions through real-time facial expressions.
- **Virtual Pet Interaction:** Offers a delightful virtual pet that responds to the user's emotions, providing companionship and entertainment.
- **API for Integration:** Exposes a user-friendly API endpoint (`/api/send_frame`) to seamlessly integrate with various applications for emotion recognition.

### Getting Started 🚀

To set up the project on your local machine, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/virtual-pet-therapy.git
   ```

2. **Install Dependencies:**

   ```bash
   cd backend2
   pip install -r requirements.txt
   ```

3. **Obtain Model Files:**

   Download the required model files:
   - [haarcascade_frontalface_default.xml](https://link-to-download.com/haarcascade_frontalface_default.xml)
   - [model.h5](https://link-to-download.com/model.h5)

   Place these files in the project root directory.

4. **Set Up Ngrok:**

   - Install Ngrok: [Ngrok Installation Guide](https://ngrok.com/download)
   - Set your Ngrok authentication token as an environment variable:

     ```bash
     export NGROK_AUTH_TOKEN=your-ngrok-auth-token
     ```

5. **Run the Application:**

   ```bash
   python app.py
   ```

   The application will be accessible at the provided Ngrok public URL.

### Usage 🚀

- Send a POST request to the `/api/send_frame` endpoint with a JSON payload containing a base64-encoded image frame.

   Example:

   ```json
   {
     "frame": "base64-encoded-image-data"
   }
   ```

- The application will respond with the detected emotion.

### Contributions Welcome! 🤝

We welcome contributions from the community! Whether it's bug reports, feature requests, or pull requests, your involvement is highly appreciated.

### License 📝

This project is licensed under the [MIT License](LICENSE). Feel free to explore, contribute, and share the joy! 🌈