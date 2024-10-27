## About the Project: FloodScan

FloodScan began with a simple but powerful observation: in the aftermath of natural disasters like floods, the last thing affected individuals want to do is manually document every item they’ve lost. This process, often essential for insurance claims, is not only time-consuming but emotionally taxing. Inspired by the potential of AI to streamline this burden, we aimed to create a solution that could automate the assessment of flood damage.

### What Inspired Us
In times of crisis, people are often overwhelmed, and documenting damaged or lost items for insurance claims can feel impossible. We realized that an AI-powered solution could bring relief by analyzing photos of pre- and post-flood conditions to automatically catalog losses. This would allow those affected to quickly generate a detailed PDF report for insurance, enabling faster recovery. Our goal was to combine empathy with technology to help communities rebound more efficiently after floods.

### What We Learned
Building FloodScan taught us a great deal about image processing and AI’s role in disaster recovery. We explored new tools and learned about object detection, counting, and assessing the status of objects in images. Additionally, creating a user-friendly PDF generator for insurance claims taught us about the importance of simplicity in design, especially when dealing with a distressed user base.

To further expand our technical knowledge, we also decided to integrate **Terraform** to automate the infrastructure deployment process. Writing a Terraform script that would build and deploy our source code using Docker allowed us to make the application production-ready in a seamless, repeatable way. This experience taught us a lot about infrastructure-as-code and gave us hands-on skills with Terraform and Docker.

### Technologies Used
To create a visually appealing and intuitive user experience, we utilized:
- **React**: This powerful frontend framework enabled rapid development of an interactive interface, keeping user experience at the forefront.
- **Tailwind CSS**: This utility-first CSS framework allowed for quick customization of styles, enabling us to create responsive layouts and adapt designs easily.
- **Shadcn UI**: Integrating this component library provided us with beautifully designed, accessible components, ensuring a polished and cohesive look throughout the app.

### How We Built FloodScan
We began by designing an AI model to process and analyze two sets of images: one taken before a flood and another after. Using advanced machine learning techniques, our model identifies, counts, and categorizes each item, noting whether it’s damaged, missing, or intact. After the analysis, FloodScan generates a structured PDF report, which includes categorized lists of damaged and missing items to streamline insurance claims.

The tech stack includes:
- **Python** for scripting and data processing
- **Google Generative AI SDK** to assist with AI model integration and fine-tuning
- **ReportLab** for generating and styling the insurance PDF report
- **Terraform** for infrastructure automation, which builds and deploys our source code using Docker for a production-ready environment
- **IPython/Google Colab** for building and testing
### Technologies Used
To create a visually appealing and intuitive user experience, we utilized:
- **React**: This powerful frontend framework enabled rapid development of an interactive interface, keeping user experience at the forefront.
- **Tailwind CSS**: This utility-first CSS framework allowed for quick customization of styles, enabling us to create responsive layouts and adapt designs easily.
- **Shadcn UI**: Integrating this component library provided us with beautifully designed, accessible components, ensuring a polished and cohesive look throughout the app.

### Challenges We Faced
1. **Accuracy in Object Detection**: Training the AI to accurately detect and differentiate objects in varying light and angles was challenging. We iterated with different models and enhanced our training data to improve reliability.
2. **Creating a Cohesive PDF**: Converting complex data into a clear, standardized PDF format for insurance claims required careful formatting. We focused on creating an intuitive layout so users could easily identify details about their losses.
3. **Empathy and Usability**: Designing for people in distress was a new, eye-opening challenge. We worked to simplify every aspect of the user interface and minimize the required inputs, making FloodScan as intuitive as possible.

FloodScan is more than just an AI tool—it’s a support system for those in crisis, providing a reliable way to reclaim losses when it's needed most. This project inspired us to continue exploring AI’s potential in disaster response, bringing hope to those facing difficult times.
\
