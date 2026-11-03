export type ProjectCategory = 'Software Engineering' | 'AI & Machine Learning' | 'Research'

export type Project = {
    slug: string
    title: string
    type: 'project' | 'publication'
    categories: ProjectCategory[]
    description: string
    technologies: string[]
    problem?: string
    approach?: string
    features?: string[]
    results?: string[]
    research?: boolean
}

export const projects: Project[] = [
    {
        slug: 'llm-teammate-feedback-summarization',
        title: 'LLM-Based Teammate Feedback Summarization',
        type: 'project',
        categories: ['Software Engineering', 'AI & Machine Learning'],
        description:
        'Built an AI-powered teammate feedback summarization system integrated with Expertiza, connecting backend services, peer-review data, and LLM-generated insights for students and instructors.',
        technologies: ['Ruby on Rails', 'Python', 'MySQL', 'MCP', 'Gemini'],
        problem:
        'Peer evaluations provide valuable insights into team dynamics, but individual comments can be fragmented, repetitive, and difficult to interpret. The goal was to make teammate feedback more useful by transforming raw peer-review responses into concise, actionable summaries without losing important context or introducing unsupported conclusions.',
        approach:
        "Developed an LLM-powered feedback summarization workflow within Expertiza. Used SQL to extract and structure anonymized peer-review data, implemented backend integration for summary generation, and designed Gemini prompts informed by CATME teamwork dimensions and Lencioni's team-dynamics framework. Emphasized evidence-grounded summaries, neutral language, and safeguards against fabricated observations.",
        features: [
            'Processed structured peer-review responses and qualitative comments for LLM consumption',
            'Generated concise summaries grounded in submitted evaluations',
            'Applied prompt constraints for specificity, actionability, and neutrality',
            'Connected generation to Expertiza through backend services and REST endpoints',
            'Supported summary retrieval and error handling',
        ],
        results: [
            'Integrated AI-assisted feedback summarization into Expertiza workflows, combining database processing, backend development, and LLM prompt engineering',
            'Gained experience designing evidence-grounded AI features and responsibly summarizing subjective feedback',
        ],
        research: true,
    },
    {
        slug: 'job-application-management',
        title: 'Job Application Management',
        type: 'project',
        categories: ['Software Engineering'],
        description:
        'A full-stack application for managing job applications and visualizing application progress.',
        technologies: ['React', 'Chart.js', 'Python', 'Flask', 'PostgreSQL', 'Docker', 'AWS (EC2, RDS)'],
        problem:
        'Managing multiple job applications can become difficult as candidates progress through different stages of the hiring process. The project aimed to simplify application tracking, organize job-search information, and provide a clearer view of application progress through interactive visualizations.',
        approach:
        'Developed a full-stack job application management platform using React for the frontend, Flask for backend services, and PostgreSQL for data persistence. Built an interactive Sankey visualization using Chart.js to represent application progress and implemented recommendation and filtering logic to help users navigate their job-search information. Containerized the application using Docker and deployed it on AWS.',
        features: [
            'Managed job application details and tracked their progress through different application statuses',
            'Visualized application flows and stages through an interactive Sankey diagram',
            'Implemented backend recommendation and filtering functionality using Python and Flask',
            'Persisted application information in PostgreSQL',
            'Containerized and deployed the application using Docker and AWS infrastructure',
        ],
        results: [
            'Delivered a cloud-deployed, full-stack application combining interactive data visualization, backend business logic, and relational database management',
            'Gained experience integrating React with Python-based APIs, representing application data visually, and deploying containerized applications in AWS',
        ],
    },
    {
        slug: 'expertiza-react-migration',
        title: 'Expertiza React Migration',
        type: 'project',
        categories: ['Software Engineering'],
        description:
        'Modernizing a Ruby on Rails application by migrating its frontend to React.',
        technologies: ['React', 'JavaScript', 'Ruby on Rails', 'REST APIs'],
        problem:
        'Expertiza is an open-source academic platform used to manage course projects, student teams, deadlines, and peer evaluations. Its existing Ruby on Rails frontend presented an opportunity to modernize the user interface and improve maintainability while preserving the established backend functionality.',
        approach:
        "Contributed to migrating parts of Expertiza's frontend from Ruby on Rails views to React. Developed React-based interfaces and integrated them with existing Rails APIs, allowing the application to adopt a modern frontend architecture without replacing its backend services. Focused on maintaining compatibility with existing academic workflows throughout the migration.",
        features: [
            'Migrated existing Rails-based user interfaces to React components',
            'Integrated React interfaces with existing Ruby on Rails REST APIs',
            'Supported workflows involving course projects, student teams, deadlines, and peer evaluations',
            'Improved frontend organization and maintainability through component-based development',
            'Preserved existing backend functionality during the migration',
        ],
        results: [
            'Contributed to modernizing an open-source academic platform serving over 500 users, improving frontend responsiveness, maintainability, and the overall user experience',
            'Gained practical experience integrating a modern React frontend with an established Rails backend and navigating the challenges of incremental migration in an existing application',
        ],
    },
    {
        slug: 'deep-learning-beyond-accuracy',
        title: 'A Controlled Comparison of Network Pruning and Knowledge Distillation',
        type: 'project',
        categories: ['AI & Machine Learning'],
        description:
        'Compared neural network pruning and knowledge distillation across multiple architectures, analyzing trade-offs between accuracy, computational efficiency, memory usage, and prediction calibration.',
        technologies: ['Python', 'PyTorch', 'ResNet-18', 'VGG-16', 'AlexNet', 'CIFAR-100', 'Tiny ImageNet'],
        problem:
        'Deep learning models often achieve strong predictive performance at the cost of substantial computational resources, making deployment challenging in resource-constrained environments. This project investigated whether neural network pruning and knowledge distillation could reduce model complexity while preserving predictive accuracy and reliability. The objective was to compare compression techniques beyond accuracy alone, considering computational efficiency, memory requirements, and prediction calibration.',
        approach:
        'Conducted a comparative study of neural network compression techniques using PyTorch, evaluating AlexNet, VGG-16, and ResNet-18 on image classification tasks involving CIFAR-100 and Tiny ImageNet. Explored structured and unstructured pruning alongside vanilla and feature-based knowledge distillation. Compared approaches under parameter and FLOP constraints, examining how different architectures respond to compression and fine-tuning.',
        features: [
            'Implemented and evaluated structured and unstructured neural network pruning techniques',
            'Explored vanilla and feature-based knowledge distillation using teacher–student architectures',
            'Evaluated predictive accuracy, expected calibration error (ECE), FLOPs, inference latency, and memory footprint',
            'Compared compression behavior across AlexNet, VGG-16, and ResNet-18',
            'Analyzed trade-offs between model sparsity, computational efficiency, and predictive performance',
        ],
        results: [
            'Found that unstructured pruning could preserve predictive accuracy even at relatively high sparsity levels, while structured pruning offered more practical GPU efficiency improvements',
            'Observed differences in compression robustness across model architectures, highlighting the importance of architecture-specific evaluation',
            'Demonstrated why model compression should be assessed using multiple metrics rather than accuracy or parameter count alone',
        ],
    },
    {
        slug: 'song-popularity-prediction',
        title: 'Song Popularity Prediction Using Machine Learning',
        type: 'publication',
        categories: ['AI & Machine Learning'],
        description:
        'Analyzed over 18,000 Spotify songs using audio, metadata, and lyric-derived features, comparing six machine learning classifiers and achieving 85.06% accuracy with Random Forest.',
        technologies: [
            'Python',
            'scikit-learn',
            'Pandas',
            'NLTK',
            'TextBlob',
            'Spotify API',
            'Genius API',
        ],
        problem:
            'Predicting whether a song will become popular is challenging because success depends on a combination of musical characteristics, lyrical content, and artist-related factors. The project investigated whether machine learning could identify patterns in these attributes and classify song popularity using measurable features rather than subjective judgments alone.',
        approach:
            'Conducted a comparative machine learning study using a dataset of over 18,000 Spotify tracks spanning 1957–2020. Combined song metadata, audio characteristics, artist-related information, and lyric-derived features, including sentiment and profanity analysis. Cleaned and preprocessed the data, applied feature encoding and scaling, and trained six classification algorithms: Random Forest, Support Vector Machine, K-Nearest Neighbors, Logistic Regression, Naïve Bayes, and Decision Tree. Evaluated the models using 10-fold cross-validation and analyzed feature importance.',
        features: [
            'Processed a dataset of more than 18,000 songs containing audio features, metadata, and lyrical information',
            'Extracted lyric-based features through sentiment and profanity analysis',
            'Compared six machine learning classifiers using cross-validation',
            'Analyzed feature importance to understand factors associated with song popularity',
            'Implemented a prediction workflow using Spotify and Genius APIs to retrieve information for new songs',
        ],
        results: [
            'Random Forest achieved the highest reported classification accuracy of 85.06% among the evaluated models',
            'Feature analysis provided insights into the relationship between musical attributes, lyrical characteristics, and popularity',
            'Demonstrated the value of combining multiple data sources and feature-engineering techniques for classification tasks',
            'Resulted in a paper published at the 2021 IEEE International Conference on Smart Electronics and Communication (ICOSEC/ICSES)',
        ],
    },
    {
        slug: 'biobert-disease-prediction',
        title: 'Transformer-Based Medical Diagnosis Assistant',
        type: 'project',
        categories: ['AI & Machine Learning'],
        description:
            'Fine-tuned BioBERT to classify free-text symptom descriptions across 40+ medical conditions, achieving 94.2% reported accuracy and evaluating robustness against varied symptom inputs.',
        technologies: ['Python', 'PyTorch', 'BioBERT', 'Hugging Face Transformers', 'scikit-learn', 'NLP'],
        problem:
            'Identifying potential medical conditions from natural-language symptom descriptions is challenging because symptoms can be expressed in different ways, overlap across diseases, or omit important details. This project explored how biomedical language models could interpret free-text symptoms and classify them into potential medical conditions, while evaluating their reliability across varied inputs.',
        approach:
            'Fine-tuned BioBERT (`dmis-lab/biobert-base-cased-v1.1`) for multiclass disease classification across more than 40 medical conditions. Built a preprocessing pipeline using Hugging Face Transformers to tokenize symptom descriptions and prepare labeled training data. Trained and evaluated the model using PyTorch, and compared its performance against a traditional TF-IDF and Logistic Regression baseline.',
        features: [
            'Processed natural-language symptom descriptions for disease classification',
            'Fine-tuned a pretrained biomedical transformer for more than 40 disease categories',
            'Implemented tokenization, label encoding, and training and evaluation pipelines',
            "Evaluated predictions using accuracy, Top-K accuracy, log loss, and Cohen's kappa",
            'Compared BioBERT against a TF-IDF and Logistic Regression baseline',
            'Tested prediction robustness using paraphrased symptoms and descriptions with omitted information',
        ],
        results: [
            'Achieved a reported classification accuracy of 94.2% across more than 40 medical conditions',
            'Demonstrated the potential of domain-specific transformer models for interpreting symptom descriptions and the importance of evaluating predictions beyond accuracy alone',
            'Robustness testing reinforced the challenges of handling incomplete or differently worded medical information',
        ],
    },
    {
        slug: 'diabetic-retinopathy-detection',
        title: 'Diabetic Retinopathy Detection',
        type: 'project',
        categories: ['AI & Machine Learning'],
        description:
            'Developed a deep learning approach to detect diabetic retinopathy from retinal images using convolutional neural networks.',
        technologies: ['Python', 'TensorFlow', 'Keras', 'DenseNet169', 'NumPy', 'Pandas', 'scikit-learn'],
        problem:
            'Diabetic retinopathy is a diabetes-related eye condition that can lead to vision loss if not detected early. Identifying signs of the disease in retinal images requires careful examination, making automated image classification a valuable area of research. This project explored the use of deep learning to detect diabetic retinopathy from retinal fundus images.',
        approach:
            'Developed a CNN-based retinal image classification system using TensorFlow and Keras. Preprocessed images from a Kaggle dataset through resizing, normalization, and data augmentation, and converted the imbalanced dataset into a binary classification problem. Implemented and trained three CNN architectures, including DenseNet169, to compare their effectiveness in identifying diabetic retinopathy.',
        features: [
            'Prepared retinal fundus images for deep learning through resizing and normalization',
            'Applied image augmentation to improve training-data diversity',
            'Addressed dataset imbalance by organizing the classification task into two categories',
            'Implemented and trained three CNN architectures for retinal image classification',
            'Optimized model training to improve classification accuracy and reduce loss',
        ],
        results: [
            'Achieved a reported classification accuracy of 95% using DenseNet169, demonstrating the potential of CNN-based models for detecting diabetic retinopathy from retinal images',
            'Gained experience with medical image preprocessing, handling imbalanced datasets, comparing deep learning architectures, and evaluating image classification performance',
        ],
    },
    {
        slug: 'event-management-portal',
        title: 'Event Management Portal',
        type: 'project',
        categories: ['Software Engineering'],
        description:
            'Built a full-stack college event management platform using the MEAN stack, featuring role-based access, event registration, and centralized event administration.',
        technologies: [
            'Angular',
            'Node.js',
            'Express.js',
            'MongoDB',
            'HTML',
            'CSS',
            'REST APIs',
        ],
        problem:
            'College events often involve multiple groups, including students, event organizers, and administrators. Managing event information, registrations, and updates across disconnected channels can make coordination difficult. This project aimed to create a centralized platform where users could discover events, register to participate, and manage event-related activities based on their roles.',
        approach:
            'Developed a full-stack event management application using the MEAN stack: MongoDB, Express.js, Angular, and Node.js. Built an Angular frontend for event discovery and management, implemented RESTful APIs using Node.js and Express, and designed MongoDB collections for events, clubs, and user queries. Incorporated authentication and role-based authorization to support different workflows for administrators, organizers, and participants.',
        features: [
            'Implemented role-based access for administrators, event organizers, and participants',
            'Developed event creation, registration, tracking, and modification workflows',
            'Built RESTful APIs to connect the Angular frontend with backend services',
            'Designed MongoDB data structures for events, clubs, and user queries',
            'Implemented authentication and authorization to control access to application features',
            'Created a centralized interface for managing college events and registrations',
        ],
        results: [
            'Built a functional full-stack platform that brought event management and student participation workflows into a single application',
            'Gained hands-on experience designing REST APIs, structuring MongoDB data, implementing role-based access control, and integrating Angular with a Node.js backend',
            'Strengthened understanding of end-to-end application development and coordinating frontend and backend functionality',
        ],
    },
    {
        slug: 'attendance-monitoring-system',
        title: 'Real-Time Attendance Monitoring System',
        type: 'project',
        categories: ['Software Engineering', 'AI & Machine Learning'],
        description:
            'Developed a facial-recognition attendance system using OpenCV and Python, with real-time student identification, automated attendance logging, and email alerts for absences.',
        technologies: ['Python', 'OpenCV', 'NumPy', 'Pandas', 'Tkinter', 'SMTP'],
        problem:
            'Traditional attendance tracking can be time-consuming, prone to manual errors, and difficult to monitor consistently. This project aimed to automate student attendance using facial recognition, reducing the need for manual recordkeeping while providing timely notifications about student absences.',
        approach:
            'Developed a Python-based attendance monitoring application using OpenCV for live camera capture and facial recognition. Implemented image preprocessing and normalization to improve the consistency of face matching against a local database. Built a desktop interface using Tkinter to make the system accessible to non-technical users, and integrated SMTP-based email notifications for reporting absences.',
        features: [
            'Captured live camera input and performed real-time facial recognition',
            'Matched detected faces against stored student records to identify individuals',
            'Applied image preprocessing and normalization to improve recognition consistency',
            'Automated attendance logging based on successful face matches',
            'Developed a Tkinter desktop interface for interacting with the system',
            'Integrated SMTP email notifications to alert relevant recipients about student absences',
        ],
        results: [
            'Built a functional attendance monitoring system combining real-time facial recognition, automated recordkeeping, and email notifications',
            'Improved face-matching consistency and real-time processing through image preprocessing and normalization',
            'Gained experience integrating computer vision with desktop application development, local data management, and automated communication workflows',
        ],
    },
    {
        slug: 'a-study-on-user-experience',
        title: 'A Study on User Experience',
        type: 'publication',
        categories: ['Research'],
        description:
            'Co-authored a published research paper examining UX design methodologies, human-computer interaction, and techniques for evaluating user experiences in web applications.',
        technologies: [
            'User Experience',
            'Human-Computer Interaction',
            'UX Research',
            'Web Design',
        ],
        problem:
            'As web applications become increasingly interactive and accessible across different devices, designing intuitive and engaging user experiences has become essential. However, user experience is a multidimensional concept influenced by usability, visual design, emotional responses, accessibility, and user expectations. This research explored the design principles and evaluation techniques that contribute to effective, user-centered web applications.',
        approach:
            'Co-authored a research paper examining user experience principles, interface design methodologies, and human-computer interaction. Conducted a literature review of existing UX research and compared approaches including skeuomorphic, flat, and material design. Studied UX measurement techniques such as emotional analysis, qualitative research, and the HEART framework, alongside emerging interaction methods and ethical considerations.',
        features: [
            'Compared skeuomorphic, flat, and material design approaches and their implications for usability',
            'Examined navigation patterns, including hamburger menus, and their role in simplifying interfaces',
            'Studied UX evaluation methods, including qualitative research, emotional analysis, and the HEART framework',
            'Explored responsive design, voice interactions, and emerging AR/VR experiences',
            'Reviewed user-centered design considerations such as internationalization, consistent layouts, recognizable icons, and search assistance',
        ],
        results: [
            'Co-authored and published the research in the International Research Journal of Engineering and Technology (IRJET), July 2022',
            'Synthesized established UX design principles and measurement approaches into practical considerations for web application development',
            'Strengthened understanding of how usability, visual design, interaction patterns, and user expectations influence software experiences',
        ],
    },
]