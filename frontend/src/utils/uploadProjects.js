import { db } from "../firebase.js";  // ✅ Add .js extension to ensure correct import
import MOCK_PROJECTS from "./mockProjects.js";
import { collection, addDoc } from "firebase/firestore";

async function uploadProjects() {
  for (let project of MOCK_PROJECTS) {
    await addDoc(collection(db, "projects"), project);
    console.log(`Uploaded: ${project.name}`);
  }
  console.log("✅ All mock projects uploaded successfully!");
}

uploadProjects();

