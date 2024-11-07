// Define the Project interface for type safety
interface Project {
    category: string;
    title: string;
    summary: string;
    details: string;
    technologies: string[];
    link: string;
}

// Project data with details as requested
const projects: Project[] = [
    {
        category: 'Data Analysis',
        title: 'Multivariate Analysis of Air Quality Data',
        summary: 'Led a comprehensive analysis of air quality data using dimension reduction and clustering methods.',
        details: 'Analyzed 10k air quality data points from Italy, examining relationships between pollutants such as NOx and CO under varying conditions. Utilized R to build from scratch and fine-tune the SVD model, employing k-means clustering and random forest models for data classification.',
        technologies: ['R', 'SVD', 'k-means clustering', 'Random Forest', 'Data Analysis'],
        link: 'https://github.com/AlephCat-G/Multivariate-Analysis-of-Air-Quality-Data-ISYE-7405',
    },
    {
        category: 'High-Performance Computing',
        title: 'Monte Carlo Simulation Project',
        summary: 'Developed parallel algorithms for complex computational tasks using Monte Carlo methods.',
        details: 'Led the development of algorithms to perform motif sequence finding using Monte Carlo simulations. Implemented in a high-performance computing environment with GT’s PACE cluster, utilizing shell scripts, CLion, and Makefile for efficient execution.',
        technologies: ['C++', 'Shell Scripting', 'Monte Carlo', 'CLion', 'PACE Cluster'],
        link: 'https://github.com/AlephCat-G/CS-6220-HPC-Project-Monte-Carlo',
    },
    {
        category: 'Database Systems',
        title: 'Drone Dispatch - Java & SQL Project',
        summary: 'Developed a MySQL database for a drone delivery service and optimized UI for management.',
        details: 'Built a robust MySQL database system for managing drone dispatches, including features for delivery routing and package tracking. Created a user interface in Java with Swing and JDBC for seamless data entry and retrieval.',
        technologies: ['Java', 'MySQL', 'Swing', 'JDBC'],
        link: 'https://github.com/AlephCat-G/CS4400Retail_System',
    },
    {
        category: 'Machine Learning',
        title: 'COMAP’s Mathematical Contest in Modeling (MCM) - Gold and Bitcoin Price Prediction',
        summary: 'Developed an LSTM neural network model for price prediction and a trading strategy model.',
        details: 'Utilized LSTM models to predict gold and Bitcoin prices based on millions of daily transactions from 2005-2016. Implemented a high-frequency trading strategy using a dynamic programming model, achieving a simulated revenue of $5 billion.',
        technologies: ['LSTM', 'Python', 'Dynamic Programming', 'MATLAB', 'Scikit-Learn'],
        link: '', // No link provided for this project
    },
    {
        category: 'Optimization and Modeling',
        title: 'Sustainable Water Bottling Plant Project',
        summary: 'Collaborated with GT ISyE and Architecture schools to design a water bottling plant.',
        details: 'Utilized the Traveling Salesman Problem (TSP) algorithm to optimize delivery routes. Conducted extensive data gathering and visualization, achieving 79.2% market penetration and 75% demand fulfillment with a 99% service level.',
        technologies: ['TSP', 'Tableau', 'Matplotlib', 'Data Visualization', 'Supply Chain Optimization'],
        link: '', // No link provided for this project
    },
    {
        category: 'Supply Chain Optimization',
        title: 'Route Optimization for Courier Services',
        summary: 'Optimized courier routes using enhanced TSP algorithms in supply chain simulations.',
        details: 'Developed annealing-dynamic improvements to TSP algorithms for optimizing routes between city hubs. Involved in data cleaning, literature review, and hyper-parameter tuning using Bayesian methods within a simulated supply chain framework.',
        technologies: ['TSP', 'Bayesian Methods', 'Python'],
        link: '', // No link provided for this project
    },
];

export default projects;
