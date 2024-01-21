# MindfulPals 🚀🐾

Welcome to the MindfulPals, Virtual Pet Therapy Project! Our open-source initiative is dedicated to providing a virtual companion and therapeutic experience for kids who may feel lonely or prefer introverted activities or just want to share emotion. The project integrates emotion recognition using machine learning, tensorflow and Scikit-Learn with a React-based frontend and a supportive generative chat model to create a holistic and engaging environment for users.

## Project Overview 🌟

### Features 🎉

* **Virtual Companion for Kids:**
  The project's core objective is to offer a virtual companion for children, providing a source of comfort and support. This is particularly beneficial for those who may find it challenging to connect with others through conventional means.
* **Emotion Recognition Using Machine Learning:**
  Machine learning, powered by TensorFlow and Scikit-Learn, is employed to enable emotion recognition. The virtual companion can analyze and understand the child's emotional state through various cues, such as facial expressions, voice tone, or text input. This personalized approach allows the companion to respond empathetically to the child's emotions.
* **React-Based Frontend:**
  The frontend of the project is developed using React, a popular JavaScript library for building user interfaces. This choice ensures a responsive and interactive user experience, crucial for maintaining the attention and interest of the target audience—children.
* **Generative Chat Model for Supportive Conversations:**
  A generative chat model, likely utilizing GPT or a similar technology, is integrated to facilitate supportive conversations. This model generates human-like responses, adapting its interaction based on the child's emotions. This dynamic and responsive chat experience mimics the empathetic qualities of a human conversation.
* **Holistic and Engaging Environment:**
  The overall design emphasizes creating a holistic and engaging environment. By combining emotion recognition, a virtual companion, and a generative chat model, the project aims to provide a comprehensive and immersive therapeutic experience.
* **Open-Source Initiative:**
  MindfulPals is an open-source project, fostering transparency, collaboration, and community involvement. The open-source nature allows developers, researchers, and contributors worldwide to participate, contribute to the codebase, and enhance the project's capabilities continuously.

## Technologies Used 💻

##### Backend: Express.js with MongoDB

* **Express.js:** The backend of the project is powered by Express.js, a popular and minimalist web application framework for Node.js. Express.js facilitates the creation of robust and scalable server-side applications, providing a solid foundation for handling HTTP requests, routing, and middleware functionalities.
* **MongoDB:** For user authentication and data storage, the project utilizes MongoDB, a NoSQL database. MongoDB's flexibility in handling unstructured data is particularly beneficial for storing user data, including authentication details and preferences.
* **Generative Chat API:** The backend incorporates a generative chat API to handle conversational interactions. This API is responsible for generating responses from the virtual companion based on user input and the emotional context inferred from the machine learning model.

##### Machine Learning: Keras with Pre-trained Emotion Recognition Model

* **Keras:** The machine learning aspect of the project leverages Keras, an open-source high-level neural networks API written in Python. Keras simplifies the process of building, training, and deploying machine learning models, making it an excellent choice for this project.
* **Pre-trained Emotion Recognition Model:** The emotion recognition component utilizes a pre-trained model. This model is likely trained on a dataset of facial expressions, voice tones, or text inputs to accurately recognize and categorize the emotional states of users. Keras provides the framework for integrating and deploying this model within the application.

##### Frontend: React.js

* **React.js:** The frontend of the project is built using React.js, a declarative and efficient JavaScript library for building user interfaces. React allows for the creation of reusable components, making it easier to manage and update the UI. Its virtual DOM (Document Object Model) approach ensures a responsive and efficient user experience, crucial for engaging interactions with the virtual companion.

## Getting Started 🚀

Follow these steps to set up the Virtual Pet Therapy Project on your local machine:

* **Clone the Repositories:**

  ```bash
  git clone https://github.com/RajBhattacharyya/MindfulPals.git
  ```
* **Set Up [Backend ](https://github.com/RajBhattacharyya/MindfulPals/tree/master/backend)for node backend:**

  ```bash
  cd backend
  ```

  Create `.env` file inside backend folder and add this:

  ```bash
  JWT_SECRET='YOUR_JWT_SECRET'
  DATABASE_URI='YOUR_MONGODB_DATABASE_URI'
  API_KEY = "YOUR_API_KEY"
  GEMINI_API = "YOUR_GEMINI_API_KEY"
  ```

  In terminal run the following code:

  ```bash
  npm install
  node index.js
  ```

  This will run the express backend at localhost:5000
* **Set Up [Backend2](https://github.com/RajBhattacharyya/MindfulPals/tree/master/backend2) for Python backend:**

  ```bash
  cd backend2
  ```

  Create `.env` file inside backend2 folder and add this:

  ```bash
  NGROK_AUTH_TOKEN='YOUR_NGROK_AUTH_TOKEN'
  ```

  In terminal run the following code:

  ```bash
  pip install -r requirements.txt
  python app.py
  ```

  This will run the express backend at localhost:8000
* **Set Up [Frontend](https://github.com/RajBhattacharyya/MindfulPals/tree/master/frontend):**

  ```bash
  cd frontend
  ```

  Create `.env` file inside frontend folder and add this:

  ```bash
  REACT_APP_API_KEY='YOUR_NGROK_API_ENDPOINT'
  ```

  In terminal run the following code:

  ```bash
  npm install
  npm start
  ```

  This will run the frontend at localhost:3000

## Deployements

Project can be viewed at [https://mindful-pals.vercel.app/](https://mindful-pals.vercel.app/)

## Contributing 🤝

We welcome contributions from the community! Whether it's bug reports, feature requests, or pull requests, your involvement is highly appreciated. See the individual README files in each repository for more details on contributing.

## License 📝

This project is licensed under the [MIT License](LICENSE). Feel free to explore, contribute, and spread joy to kids around the world! 🌈🐾
