# 🧠 AI Model Inventory Manager

🌐 **Live Site:** [https://candid-chebakia-c6484d.netlify.app/](https://candid-chebakia-c6484d.netlify.app/)

---

## 📘 Overview

**AI Model Inventory Manager** is a full-stack web application that allows users to catalog, manage, and purchase AI models. It integrates **React.js**, **Firebase Authentication**, **MongoDB**, and **Express.js**, with enhanced security using **Firebase Admin SDK** verification.

This project provides hands-on experience with authentication, protected routes, and real-time CRUD operations for managing AI model data.

---

## 🚀 Key Features

- 🔐 **Secure Authentication** – Email/password and Google login via Firebase.
- 🔑 **Firebase Admin SDK Authorization** – Only verified creators can update or delete their models.
- 🧾 **CRUD Functionality** – Add, update, view, and delete AI models in MongoDB.
- 💰 **Purchase System** – Purchase count updates in real-time using `$inc`.
- 🔍 **Filter & Search** – Search models by name and filter by framework.
- 🌙 **Dark / Light Mode** – Global theme toggle for better user experience.
- 📱 **Responsive UI** – Optimized layout for desktop, tablet, and mobile.
- ⚙️ **Error Handling** – Custom 404 page and real-time toast notifications.
- 📡 **RESTful API** – Express server with protected routes and MongoDB operations.

---

## 🧩 Tech Stack

| Category      | Technology                                      |
|---------------|------------------------------------------------|
| Frontend      | React.js, React Router, Firebase Auth, Toastify |
| Backend       | Node.js, Express.js, Firebase Admin SDK        |
| Database      | MongoDB Atlas                                  |
| Hosting       | Netlify (Client), Vercel (Server)             |
| Image Hosting | ImgBB                                          |
| Auth Provider | Firebase Authentication                        |

---

## 📚 Page Overview

| Page           | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| Home           | Shows featured AI models, About section, and Get Started section.           |
| All Models     | Displays all AI models with search and filter options.                      |
| Add Model      | Private form to add a new AI model (restricted to logged-in users).        |
| Model Details  | Shows complete model info with a purchase button.                           |
| My Models      | Lists models created by the logged-in user.                                 |
| My Purchases   | Shows models purchased by the user.                                         |
| Login / Register | Firebase authentication with Email and Google login.                     |
| 404 Page       | Custom not-found page.                                                      |

---

## 💻 Installation

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/Tanzeem74/AI-Inventory-Model-Client.git
cd AI-Inventory-Model-Client
