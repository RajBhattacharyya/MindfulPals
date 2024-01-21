import numpy as np
from keras.preprocessing.image import img_to_array

emotion_labels = ['Angry', 'Disgust', 'Fear', 'Happy', 'Neutral', 'Sad', 'Surprise']

def predict_emotion(emotion_classifier, roi_gray):
    roi = roi_gray.astype('float') / 255.0
    roi = img_to_array(roi)
    roi = np.expand_dims(roi, axis=0)
    prediction = emotion_classifier.predict(roi)[0]
    label = emotion_labels[prediction.argmax()]
    return label