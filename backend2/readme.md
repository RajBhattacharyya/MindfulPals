### Getting Started 🚀

To set up the project on your local machine, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/RajBhattacharyya/MindfulPals.git
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
