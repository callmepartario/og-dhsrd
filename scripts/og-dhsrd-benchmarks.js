// User set variables
let Hdie = 0;
let Fdie = 0;
let Adie = 0;
let Ddie = 0;

// Difficulty Benchmark Arrays
const d8d8 = [100.00,100.00,98.44,95.31,90.63,84.38,76.56,67.19,56.25,43.75,32.81,23.44,15.63,9.38,4.69,1.56,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const d8d8d6 = [100.00,100.00,100.00,99.74,98.96,97.40,94.79,90.89,85.42,78.39,69.79,60.16,50.00,39.84,30.21,21.61,14.58,9.11,5.21,2.60,1.04,0.26,0,0,0,0,0,0,0,0];
const d8d8d8 = [100.00,100.00,100.00,99.80,99.22,98.05,96.09,93.16,89.06,83.59,76.56,68.36,59.38,50.00,40.63,31.64,23.44,16.41,10.94,6.84,3.91,1.95,0.78,0.20,0,0,0,0,0,0];
const d8d8dadvd6 = [90.89,85.42,78.39,69.79,60.16,50.00,39.84,30.21,21.61,14.58,9.11,5.21,2.60,1.04,0.26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const d8d8dadvd8 = [83.59,76.56,68.36,59.38,50.00,40.63,31.64,23.44,16.41,10.94,6.84,3.91,1.95,0.78,0.20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const d8d8dadvd10 = [74.53,66.88,58.59,50.00,41.41,33.13,25.47,18.75,13.13,8.75,5.47,3.13,1.56,0.63,0.16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const d10d8 = [100.00,100.00,98.75,96.25,92.50,87.50,81.25,73.75,65.00,55.00,45.00,35.00,26.25,18.75,12.50,7.50,3.75,1.25,0,0,0,0,0,0,0,0,0,0,0,0];
const d10d8d6 = [100.00,100.00,100.00,99.79,99.17,97.92,95.83,92.71,88.33,82.71,75.83,67.92,59.17,50.00,40.83,32.08,24.17,17.29,11.67,7.29,4.17,2.08,0.83,0.21,0,0,0,0,0,0];
const d10d8d8 = [100.00,100.00,100.00,99.84,99.38,98.44,96.88,94.53,91.25,86.88,81.25,74.53,66.88,58.59,50.00,41.41,33.13,25.47,18.75,13.13,8.75,5.47,3.13,1.56,0.63,0.16,0,0,0,0];
const d10d8dadvd6 = [92.71,88.33,82.71,75.83,67.92,59.17,50.00,40.83,32.08,24.17,17.29,11.67,7.29,4.17,2.08,0.83,0.21,0,0,0,0,0,0,0,0,0,0,0,0,0];
const d10d8dadvd8 = [86.88,81.25,74.53,66.88,58.59,50.00,41.41,33.13,25.47,18.75,13.13,8.75,5.47,3.13,1.56,0.63,0.16,0,0,0,0,0,0,0,0,0,0,0,0,0];
const d10d8dadvd10 = [79.50,73.00,65.75,58.00,50.00,42.00,34.25,27.00,20.50,15.00,10.50,7.00,4.38,2.50,1.25,0.50,0.13,0,0,0,0,0,0,0,0,0,0,0,0,0];
const d10d10 = [100.00,100.00,99.00,97.00,94.00,90.00,85.00,79.00,72.00,64.00,55.00,45.00,36.00,28.00,21.00,15.00,10.00,6.00,3.00,1.00,0,0,0,0,0,0,0,0,0,0];
const d10d10d6 = [100.00,100.00,100.00,99.83,99.33,98.33,96.67,94.17,90.67,86.17,80.67,74.17,66.67,58.50,50.00,41.50,33.33,25.83,19.33,13.83,9.33,5.83,3.33,1.67,0.67,0.17,0,0,0,0];
const d10d10d8 = [100.00,100.00,100.00,99.88,99.50,98.75,97.50,95.63,93.00,89.50,85.00,79.50,73.00,65.75,58.00,50.00,42.00,34.25,27.00,20.50,15.00,10.50,7.00,4.38,2.50,1.25,0.50,0.13,0,0];
const d10d10d10 = [100.00,100.00,100.00,99.90,99.60,99.00,98.00,96.50,94.40,91.60,88.00,83.50,78.00,71.70,64.80,57.50,50.00,42.50,35.20,28.30,22.00,16.50,12.00,8.40,5.60,3.50,2.00,1.00,0.40,0.10];
const d10d10dadvd6 = [94.17,90.67,86.17,80.67,74.17,66.67,58.50,50.00,41.50,33.33,25.83,19.33,13.83,9.33,5.83,3.33,1.67,0.67,0.17,0,0,0,0,0,0,0,0,0,0,0];
const d10d10dadvd8 = [89.50,85.00,79.50,73.00,65.75,58.00,50.00,42.00,34.25,27.00,20.50,15.00,10.50,7.00,4.38,2.50,1.25,0.50,0.13,0,0,0,0,0,0,0,0,0,0,0];
const d10d10dadvd10 = [83.50,78.00,71.70,64.80,57.50,50.00,42.50,35.20,28.30,22.00,16.50,12.00,8.40,5.60,3.50,2.00,1.00,0.40,0.10,0,0,0,0,0,0,0,0,0,0,0];
const d12d8 = [100.00,100.00,98.96,96.88,93.75,89.58,84.38,78.13,70.83,62.50,54.17,45.83,37.50,29.17,21.88,15.63,10.42,6.25,3.13,1.04,0,0,0,0,0,0,0,0,0,0];
const d12d8d6 = [100.00,100.00,100.00,99.83,99.31,98.26,96.53,93.92,90.28,85.59,79.86,73.26,65.97,58.16,50.00,41.84,34.03,26.74,20.14,14.41,9.72,6.08,3.47,1.74,0.69,0.17,0,0,0,0];
const d12d8d8 = [100.00,100.00,100.00,99.87,99.48,98.70,97.40,95.44,92.71,89.06,84.38,78.78,72.40,65.36,57.81,50.00,42.19,34.64,27.60,21.22,15.63,10.94,7.29,4.56,2.60,1.30,0.52,0.13,0,0];
const d12d8dadvd6 = [93.92,90.28,85.59,79.86,73.26,65.97,58.16,50.00,41.84,34.03,26.74,20.14,14.41,9.72,6.08,3.47,1.74,0.69,0.17,0,0,0,0,0,0,0,0,0,0,0];
const d12d8dadvd8 = [89.06,84.38,78.78,72.40,65.36,57.81,50.00,42.19,34.64,27.60,21.22,15.63,10.94,7.29,4.56,2.60,1.30,0.52,0.13,0,0,0,0,0,0,0,0,0,0,0];
const d12d8dadvd10 = [82.92,77.50,71.35,64.58,57.40,50.00,42.60,35.42,28.65,22.50,17.08,12.50,8.75,5.83,3.65,2.08,1.04,0.42,0.10,0,0,0,0,0,0,0,0,0,0,0];
const d12d10 = [100.00,100.00,99.17,97.50,95.00,91.67,87.50,82.50,76.67,70.00,62.50,54.17,45.83,37.50,30.00,23.33,17.50,12.50,8.33,5.00,2.50,0.83,0,0,0,0,0,0,0,0];
const d12d10d6 = [100.00,100.00,100.00,99.86,99.44,98.61,97.22,95.14,92.22,88.47,83.89,78.47,72.22,65.28,57.78,50.00,42.22,34.72,27.78,21.53,16.11,11.53,7.78,4.86,2.78,1.39,0.56,0.14,0,0];
const d12d10d8 = [100.00,100.00,100.00,99.90,99.58,98.96,97.92,96.35,94.17,91.25,87.50,82.92,77.50,71.35,64.58,57.40,50.00,42.60,35.42,28.65,22.50,17.08,12.50,8.75,5.83,3.65,2.08,1.04,0.42,0.10];
const d12d10d10 = [100.00,100.00,100.00,99.92,99.67,99.17,98.33,97.08,95.33,93.00,90.00,86.25,81.67,76.33,70.33,63.83,57.00,50.00,43.00,36.17,29.67,23.67,18.33,13.75,10.00,7.00,4.67,2.92,1.67,0.83];
const d12d10dadvd6 = [95.14,92.22,88.47,83.89,78.47,72.22,65.28,57.78,50.00,42.22,34.72,27.78,21.53,16.11,11.53,7.78,4.86,2.78,1.39,0.56,0.14,0,0,0,0,0,0,0,0,0];
const d12d10dadvd8 = [91.25,87.50,82.92,77.50,71.35,64.58,57.40,50.00,42.60,35.42,28.65,22.50,17.08,12.50,8.75,5.83,3.65,2.08,1.04,0.42,0.10,0,0,0,0,0,0,0,0,0];
const d12d10dadvd10 = [86.25,81.67,76.33,70.33,63.83,57.00,50.00,43.00,36.17,29.67,23.67,18.33,13.75,10.00,7.00,4.67,2.92,1.67,0.83,0.33,0.08,0,0,0,0,0,0,0,0,0];
const d12d12 = [100.00,100.00,99.31,97.92,95.83,93.06,89.58,85.42,80.56,75.00,68.75,61.81,54.17,45.83,38.19,31.25,25.00,19.44,14.58,10.42,6.94,4.17,2.08,0.69,0,0,0,0,0,0];
const d12d12d6 = [100.00,100.00,100.00,99.88,99.54,98.84,97.69,95.95,93.52,90.39,86.57,82.06,76.85,70.95,64.35,57.29,50.00,42.71,35.65,29.05,23.15,17.94,13.43,9.61,6.48,4.05,2.31,1.16,0.46,0.12];
const d12d12d8 = [100.00,100.00,100.00,99.91,99.65,99.13,98.26,96.96,95.14,92.71,89.58,85.76,81.25,76.04,70.14,63.72,56.94,50.00,43.06,36.28,29.86,23.96,18.75,14.24,10.42,7.29,4.86,3.04,1.74,0.87];
const d12d12d10 = [100.00,100.00,100.00,99.93,99.72,99.31,98.61,97.57,96.11,94.17,91.67,88.54,84.72,80.21,75.00,69.24,63.06,56.60,50.00,43.40,36.94,30.76,25.00,19.79,15.28,11.46,8.33,5.83,3.89,2.43];
const d12d12dadvd6 = [95.95,93.52,90.39,86.57,82.06,76.85,70.95,64.35,57.29,50.00,42.71,35.65,29.05,23.15,17.94,13.43,9.61,6.48,4.05,2.31,1.16,0.46,0.12,0,0,0,0,0,0,0];
const d12d12dadvd8 = [92.71,89.58,85.76,81.25,76.04,70.14,63.72,56.94,50.00,43.06,36.28,29.86,23.96,18.75,14.24,10.42,7.29,4.86,3.04,1.74,0.87,0.35,0.09,0,0,0,0,0,0,0];
const d12d12dadvd10 = [88.54,84.72,80.21,75.00,69.24,63.06,56.60,50.00,43.40,36.94,30.76,25.00,19.79,15.28,11.46,8.33,5.83,3.89,2.43,1.39,0.69,0.28,0.07,0,0,0,0,0,0,0];
const d20d8 = [100.00,100.00,99.38,98.13,96.25,93.75,90.63,86.88,82.50,77.50,72.50,67.50,62.50,57.50,52.50,47.50,42.50,37.50,32.50,27.50,22.50,17.50,13.13,9.38,6.25,3.75,1.88,0.63,0,0];
const d20d8d6 = [100.00,100.00,100.00,99.90,99.58,98.96,97.92,96.35,94.17,91.35,87.92,83.96,79.58,74.90,70.00,65.00,60.00,55.00,50.00,45.00,40.00,35.00,30.00,25.10,20.42,16.04,12.08,8.65,5.83,3.65];
const d20d8d8 = [100.00,100.00,100.00,99.92,99.69,99.22,98.44,97.27,95.63,93.44,90.63,87.27,83.44,79.22,74.69,69.92,65.00,60.00,55.00,50.00,45.00,40.00,35.00,30.08,25.31,20.78,16.56,12.73,9.38,6.56];
const d20d8dadvd6 = [96.35,94.17,91.35,87.92,83.96,79.58,74.90,70.00,65.00,60.00,55.00,50.00,45.00,40.00,35.00,30.00,25.10,20.42,16.04,12.08,8.65,5.83,3.65,2.08,1.04,0.42,0.10,0,0,0];
const d20d8dadvd8 = [93.44,90.63,87.27,83.44,79.22,74.69,69.92,65.00,60.00,55.00,50.00,45.00,40.00,35.00,30.08,25.31,20.78,16.56,12.73,9.38,6.56,4.38,2.73,1.56,0.78,0.31,0.08,0,0,0];
const d20d8dadvd10 = [89.75,86.50,82.81,78.75,74.38,69.75,64.94,60.00,55.00,50.00,45.00,40.00,35.06,30.25,25.63,21.25,17.19,13.50,10.25,7.50,5.25,3.50,2.19,1.25,0.63,0.25,0.06,0,0,0];
const d20d10 = [100.00,100.00,99.50,98.50,97.00,95.00,92.50,89.50,86.00,82.00,77.50,72.50,67.50,62.50,57.50,52.50,47.50,42.50,37.50,32.50,27.50,22.50,18.00,14.00,10.50,7.50,5.00,3.00,1.50,0.50];
const d20d10d6 = [100.00,100.00,100.00,99.92,99.67,99.17,98.33,97.08,95.33,93.08,90.33,87.08,83.33,79.17,74.67,69.92,65.00,60.00,55.00,50.00,45.00,40.00,35.00,30.08,25.33,20.83,16.67,12.92,9.67,6.92];
const d20d10d8 = [100.00,100.00,100.00,99.94,99.75,99.38,98.75,97.81,96.50,94.75,92.50,89.75,86.50,82.81,78.75,74.38,69.75,64.94,60.00,55.00,50.00,45.00,40.00,35.06,30.25,25.63,21.25,17.19,13.50,10.25];
const d20d10d10 = [100.00,100.00,100.00,99.95,99.80,99.50,99.00,98.25,97.20,95.80,94.00,91.75,89.00,85.80,82.20,78.25,74.00,69.50,64.80,59.95,55.00,50.00,45.00,40.05,35.20,30.50,26.00,21.75,17.80,14.20];
const d20d10dadvd6 = [97.08,95.33,93.08,90.33,87.08,83.33,79.17,74.67,69.92,65.00,60.00,55.00,50.00,45.00,40.00,35.00,30.08,25.33,20.83,16.67,12.92,9.67,6.92,4.67,2.92,1.67,0.83,0.33,0.08,0];
const d20d10dadvd8 = [94.75,92.50,89.75,86.50,82.81,78.75,74.38,69.75,64.94,60.00,55.00,50.00,45.00,40.00,35.06,30.25,25.63,21.25,17.19,13.50,10.25,7.50,5.25,3.50,2.19,1.25,0.63,0.25,0.06,0];
const d20d10dadvd10 = [91.75,89.00,85.80,82.20,78.25,74.00,69.50,64.80,59.95,55.00,50.00,45.00,40.05,35.20,30.50,26.00,21.75,17.80,14.20,11.00,8.25,6.00,4.20,2.80,1.75,1.00,0.50,0.20,0.05,0];
const d20d12 = [100.00,100.00,99.58,98.75,97.50,95.83,93.75,91.25,88.33,85.00,81.25,77.08,72.50,67.50,62.50,57.50,52.50,47.50,42.50,37.50,32.50,27.50,22.92,18.75,15.00,11.67,8.75,6.25,4.17,2.50];
const d20d12d6 = [100.00,100.00,100.00,99.93,99.72,99.31,98.61,97.57,96.11,94.24,91.94,89.24,86.11,82.57,78.61,74.31,69.72,64.93,60.00,55.00,50.00,45.00,40.00,35.07,30.28,25.69,21.39,17.43,13.89,10.76];
const d20d12d8 = [100.00,100.00,100.00,99.95,99.79,99.48,98.96,98.18,97.08,95.63,93.75,91.46,88.75,85.63,82.08,78.18,73.96,69.48,64.79,59.95,55.00,50.00,45.00,40.05,35.21,30.52,26.04,21.82,17.92,14.37];
const d20d12d10 = [100.00,100.00,100.00,99.96,99.83,99.58,99.17,98.54,97.67,96.50,95.00,93.12,90.83,88.12,85.00,81.50,77.67,73.54,69.17,64.58,59.83,54.96,50.00,45.04,40.17,35.42,30.83,26.46,22.33,18.50];
const d20d12dadvd6 = [97.57,96.11,94.24,91.94,89.24,86.11,82.57,78.61,74.31,69.72,64.93,60.00,55.00,50.00,45.00,40.00,35.07,30.28,25.69,21.39,17.43,13.89,10.76,8.06,5.76,3.89,2.43,1.39,0.69,0.28];
const d20d12dadvd8 = [95.63,93.75,91.46,88.75,85.63,82.08,78.18,73.96,69.48,64.79,59.95,55.00,50.00,45.00,40.05,35.21,30.52,26.04,21.82,17.92,14.37,11.25,8.54,6.25,4.37,2.92,1.82,1.04,0.52,0.21];
const d20d12dadvd10 = [93.12,90.83,88.12,85.00,81.50,77.67,73.54,69.17,64.58,59.83,54.96,50.00,45.04,40.17,35.42,30.83,26.46,22.33,18.50,15.00,11.88,9.17,6.88,5.00,3.50,2.33,1.46,0.83,0.42,0.17];
const d20d20 = [100.00,100.00,99.75,99.25,98.50,97.50,96.25,94.75,93.00,91.00,88.75,86.25,83.50,80.50,77.25,73.75,70.00,66.00,61.75,57.25,52.50,47.50,42.75,38.25,34.00,30.00,26.25,22.75,19.50,16.50];
const d20d20d6 = [100.00,100.00,100.00,99.96,99.83,99.58,99.17,98.54,97.67,96.54,95.17,93.54,91.67,89.54,87.17,84.54,81.67,78.54,75.17,71.54,67.67,63.54,59.17,54.62,50.00,45.37,40.83,36.46,32.33,28.46];
const d20d20d8 = [100.00,100.00,100.00,99.97,99.88,99.69,99.38,98.91,98.25,97.38,96.25,94.88,93.25,91.38,89.25,86.88,84.25,81.38,78.25,74.88,71.25,67.38,63.25,58.94,54.50,50.00,45.50,41.06,36.75,32.63];
const d20d20d10 = [100.00,100.00,100.00,99.97,99.90,99.75,99.50,99.12,98.60,97.90,97.00,95.87,94.50,92.87,91.00,88.87,86.50,83.87,81.00,77.87,74.50,70.87,67.00,62.92,58.70,54.37,50.00,45.62,41.30,37.07];
const d20d20dadvd6 = [98.54,97.67,96.54,95.17,93.54,91.67,89.54,87.17,84.54,81.67,78.54,75.17,71.54,67.67,63.54,59.17,54.62,50.00,45.37,40.83,36.46,32.33,28.46,24.83,21.46,18.33,15.46,12.83,10.46,8.33];
const d20d20dadvd8 = [97.38,96.25,94.88,93.25,91.38,89.25,86.88,84.25,81.38,78.25,74.88,71.25,67.38,63.25,58.94,54.50,50.00,45.50,41.06,36.75,32.63,28.75,25.13,21.75,18.63,15.75,13.13,10.75,8.63,6.75];
const d20d20dadvd10 = [95.87,94.50,92.87,91.00,88.87,86.50,83.87,81.00,77.87,74.50,70.87,67.00,62.92,58.70,54.37,50.00,45.62,41.30,37.07,33.00,29.12,25.50,22.12,19.00,16.12,13.50,11.12,9.00,7.12,5.50];

const d20dadv = [100.00,90.25,81.00,72.25,64.00,56.25,49.00,42.25,36.00,30.25,25.00,20.25,16.00,12.25,9.00,6.25,4.00,2.25,1.00,0.25];
const d20 = [100.00,95.00,90.00,85.00,80.00,75.00,70.00,65.00,60.00,55.00,50.00,45.00,40.00,35.00,30.00,25.00,20.00,15.00,10.00,5.00];
const d20adv = [100.00,99.75,99.00,97.75,96.00,93.75,91.00,87.75,84.00,79.75,75.00,69.75,64.00,57.75,51.00,43.75,36.00,27.75,19.00,9.75];

// Fetch data
/*
let fetchData = await fetch("./db/og-dhsrd.json");
let data = await fetchData.json();
*/

// Initialize
deselectHope();
setHdie(12);
setFdie(12);
setAdie(6);
setDdie(6);
populateAdversaryBenchmarks();

// Clear selections
function deselectHope() {
  document.getElementById('benchmark-hope-d8').classList.remove('btn-hope');
  document.getElementById('benchmark-hope-d10').classList.remove('btn-hope');
  document.getElementById('benchmark-hope-d12').classList.remove('btn-hope');
  document.getElementById('benchmark-hope-d20').classList.remove('btn-hope');
}
function deselectFear() {
  document.getElementById('benchmark-fear-d8').classList.remove('btn-fear');
  document.getElementById('benchmark-fear-d10').classList.remove('btn-fear');
  document.getElementById('benchmark-fear-d12').classList.remove('btn-fear');
  document.getElementById('benchmark-fear-d20').classList.remove('btn-fear');
}
function deselectAdvantage() {
  document.getElementById('benchmark-advantage-d6').classList.remove('btn-advantage');
  document.getElementById('benchmark-advantage-d8').classList.remove('btn-advantage');
  document.getElementById('benchmark-advantage-d10').classList.remove('btn-advantage');
}
function deselectDisadvantage() {
  document.getElementById('benchmark-disadvantage-d6').classList.remove('btn-disadvantage');
  document.getElementById('benchmark-disadvantage-d8').classList.remove('btn-disadvantage');
  document.getElementById('benchmark-disadvantage-d10').classList.remove('btn-disadvantage');
}

// Making Selections
function setHdie(x) {
  deselectHope();
  Hdie = x;
  if (Hdie == 8) { document.getElementById("benchmark-hope-d8").classList.add('btn-hope'); }
  if (Hdie == 10) { document.getElementById("benchmark-hope-d10").classList.add('btn-hope'); }
  if (Hdie == 12) { document.getElementById("benchmark-hope-d12").classList.add('btn-hope'); }
  if (Hdie == 20) { document.getElementById("benchmark-hope-d20").classList.add('btn-hope'); }
  calcHopeFear();
  calcDifficulty();
}
function setFdie(x) {
  deselectFear();
  Fdie = x;
  if (Fdie == 8) { document.getElementById("benchmark-fear-d8").classList.add('btn-fear'); }
  if (Fdie == 10) { document.getElementById("benchmark-fear-d10").classList.add('btn-fear'); }
  if (Fdie == 12) { document.getElementById("benchmark-fear-d12").classList.add('btn-fear'); }
  if (Fdie == 20) { document.getElementById("benchmark-fear-d20").classList.add('btn-fear'); }
  calcHopeFear();
  calcDifficulty();
}
function setAdie(x) {
  deselectAdvantage();
  Adie = x;
  if (Adie == 6) { document.getElementById("benchmark-advantage-d6").classList.add('btn-advantage'); }
  if (Adie == 8) { document.getElementById("benchmark-advantage-d8").classList.add('btn-advantage'); }
  if (Adie == 10) { document.getElementById("benchmark-advantage-d10").classList.add('btn-advantage'); }
  calcDifficulty();
}
function setDdie(x) {
  deselectDisadvantage();
  Ddie = x;
  if (Ddie == 6) { document.getElementById("benchmark-disadvantage-d6").classList.add('btn-disadvantage'); }
  if (Ddie == 8) { document.getElementById("benchmark-disadvantage-d8").classList.add('btn-disadvantage'); }
  if (Ddie == 10) { document.getElementById("benchmark-disadvantage-d10").classList.add('btn-disadvantage'); }
  calcDifficulty();
}

// Calculate Hope and fear
function calcPercentage(x,y) {
  return (x/y*100).toFixed(2) + "%";
}

function calcHopeFear() {
  var H = 0;
  var F = 0;
  var D = 0;
  var C = 0;
  // detrmine total duality dice outcomes (denominator)
  D = Hdie * Fdie;
  // determine smaller die to set crit, hope, and fear outcomes (numerators)
  if (Hdie >= Fdie) {
    C = Fdie;
    for (let i = 0; i < Fdie; i++) {
      F = F + i;
    }
    H = D - C - F;
  }
  else if (Fdie > Hdie) {
    C = Hdie;
    for (let i = 0; i < Hdie; i++) {
      H = H + i;
    }
    F = D - C - H;
  }
  // calculate percentages
  dualityDiceFear = calcPercentage(F, D);
  dualityDiceHope = calcPercentage(H, D);
  dualityDiceCrit = calcPercentage(C, D);
  // populate table headers
  document.getElementById('benchmark-hope-die').innerHTML = "d" + Hdie;
  document.getElementById('benchmark-fear-die').innerHTML = "d" + Fdie;
  // populate percentages
  document.getElementById('benchmark-fear-percent').innerHTML = dualityDiceFear;
  document.getElementById('benchmark-hope-percent').innerHTML = dualityDiceHope;
  document.getElementById('benchmark-crit-percent').innerHTML = dualityDiceCrit;
  // populate chart widths
  $("#benchmark-hope-chart").css("width", dualityDiceHope);
  $("#benchmark-fear-chart").css("width", dualityDiceFear);
  $("#benchmark-crit-chart").css("width", dualityDiceCrit);
}

// Calculate Difficulty Benchmarks
function calcDifficulty() {
  // populate table headers
  document.getElementById('benchmark-difficulty-hope-die').innerHTML = "d" + Hdie;
  document.getElementById('benchmark-difficulty-fear-die').innerHTML = "d" + Fdie;
  document.getElementById('benchmark-difficulty-advantage-die').innerHTML = "d" + Adie;
  document.getElementById('benchmark-difficulty-disadvantage-die').innerHTML = "d" + Ddie;
  // populate rows
  for (let i = 5; i < 31; i++) {
    difficultyBenchmark(i);
  }
}

function difficultyBenchmark(x) {
  // gather row data
  var rowDisadvantage = calcDisadvantage(x-1);
  var rowDuality = calcDuality(x-1);
  var rowAdvantage = calcAdvantage(x-1);
  // string rows
  var xDifficulty = "benchmark-" + x;
  var xDisadvantage = "benchmark-" + x + "-disadvantage";
  var xDuality = "benchmark-" + x + "-duality";
  var xAdvantage = "benchmark-" + x + "-advantage";
  // populate row
  document.getElementById(xDifficulty).innerHTML = x;
  document.getElementById(xDisadvantage).innerHTML = calcPercentage(rowDisadvantage,100);
  document.getElementById(xDuality).innerHTML = calcPercentage(rowDuality,100);
  document.getElementById(xAdvantage).innerHTML = calcPercentage(rowAdvantage,100);
  // populate chart by difference
  $("#benchmark-" + x + "-disadvantage-chart").css("width", calcPercentage((rowDisadvantage),100));
  $("#benchmark-" + x + "-duality-chart").css("width", calcPercentage((rowDuality - rowDisadvantage),100));
  $("#benchmark-" + x + "-advantage-chart").css("width", calcPercentage((rowAdvantage - rowDuality),100));
}

function calcDisadvantage(x) {
  var dadv = 0;
  if (Hdie == 8) {
    if (Fdie == 8) {
      if (Ddie == 6) {dadv = d8d8dadvd6[x];}
      else if (Ddie == 8) {dadv = d8d8dadvd8[x];}
      else if (Ddie == 10) {dadv = d10d8dadvd10[x];}
    }
    else if (Fdie == 10) {
      if (Ddie == 6) {dadv = d10d8dadvd6[x];}
      if (Ddie == 8) {dadv = d10d8dadvd8[x];}
      if (Ddie == 10) {dadv = d10d8dadvd10[x];}
    }
    else if (Fdie == 12) {
      if (Ddie == 6) {dadv = d12d8dadvd6[x];}
      else if (Ddie == 8) {dadv = d12d8dadvd8[x];}
      else if (Ddie == 10) {dadv = d12d8dadvd10[x];}
    }
    else if (Fdie == 20) {
      if (Ddie == 6) {dadv = d20d8dadvd6[x];}
      else if (Ddie == 8) {dadv = d20d8dadvd8[x];}
      else if (Ddie == 10) {dadv = d20d8dadvd10[x];}
    }
  }
  else if (Hdie == 10) {
    if (Fdie == 8) {
      if (Ddie == 6) {dadv = d10d8dadvd6[x];}
      else if (Ddie == 8) {dadv = d10d8dadvd8[x];}
      else if (Ddie == 10) {dadv = d10d8dadvd10[x];}
    }
    else if (Fdie == 10) {
      if (Ddie == 6) {dadv = d10d10dadvd6[x];}
      else if (Ddie == 8) {dadv = d10d10dadvd8[x];}
      else if (Ddie == 10) {dadv = d10d10dadvd10[x];}
    }
    else if (Fdie == 12) {
      if (Ddie == 6) {dadv = d12d12dadvd6[x];}
      else if (Ddie == 8) {dadv = d12d12dadvd8[x];}
      else if (Ddie == 10) {dadv = d12d12dadvd10[x];}
    }
    else if (Fdie == 20) {
      if (Ddie == 6) {dadv = d20d10advd6[x];}
      else if (Ddie == 8) {dadv = d20d10dadvd8[x];}
      else if (Ddie == 10) {dadv = d20d10dadvd10[x];}
    }
  }
  else if (Hdie == 12) {
    if (Fdie == 8) {
      if (Ddie == 6) {dadv = d12d8dadvd6[x];}
      else if (Ddie == 8) {dadv = d12d8dadvd8[x];}
      else if (Ddie == 10) {dadv = d12d8dadvd10[x];}
    }
    else if (Fdie == 10) {
      if (Ddie == 6) {dadv = d12d10dadvd6[x];}
      else if (Ddie == 8) {dadv = d12d10dadvd8[x];}
      else if (Ddie == 10) {dadv = d12d10dadvd10[x];}
    }
    else if (Fdie == 12) {
      if (Ddie == 6) {dadv = d12d12dadvd6[x];}
      else if (Ddie == 8) {dadv = d12d12dadvd8[x];}
      else if (Ddie == 10) {dadv = d12d12dadvd10[x];}
    }
    else if (Fdie == 20) {
      if (Ddie == 6) {dadv = d20d12dadvd6[x];}
      else if (Ddie == 8) {dadv = d20d12dadvd8[x];}
      else if (Ddie == 10) {dadv = d20d12dadvd10[x];}
    }
  }
  else if (Hdie == 20) {
    if (Fdie == 8) {
      if (Ddie == 6) {dadv = d20d8dadvd6[x];}
      else if (Ddie == 8) {dadv = d20d8dadvd8[x];}
      else if (Ddie == 10) {dadv = d20d8dadvd10[x];}
    }
    else if (Fdie == 10) {
      if (Ddie == 6) {dadv = d20d10dadvd6[x];}
      else if (Ddie == 8) {dadv = d20d10dadvd8[x];}
      else if (Ddie == 10) {dadv = d20d10dadvd10[x];}
    }
    else if (Fdie == 12) {
      if (Ddie == 6) {dadv = d20d12dadvd6[x];}
      else if (Ddie == 8) {dadv = d20d12dadvd8[x];}
      else if (Ddie == 10) {dadv = d20d12dadvd10[x];}
    }
    else if (Fdie == 20) {
      if (Ddie == 6) {dadv = d20d20dadvd6[x];}
      else if (Ddie == 8) {dadv = d20d20dadvd8[x];}
      else if (Ddie == 10) {dadv = d20d20dadvd10[x];}
    }
  }
  return dadv;
}

function calcDuality(x) {
  var dd = 0;
  if (Hdie == 8) {
    if (Fdie == 8) {dd = d8d8[x];}
    else if (Fdie == 10) {dd = d10d8[x];}
    else if (Fdie == 12) {dd = d12d8[x];}
    else if (Fdie == 20) {dd = d20d8[x];}
  }
  else if (Hdie == 10) {
    if (Fdie == 8) {dd = d10d8[x];}
    else if (Fdie == 10) {dd = d10d10[x];}
    else if (Fdie == 12) {dd = d12d10[x];}
    else if (Fdie == 20) {dd = d20d10[x];}
  }
  else if (Hdie == 12) {
    if (Fdie == 8) {dd = d12d8[x];}
    else if (Fdie == 10) {dd = d12d10[x];}
    else if (Fdie == 12) {dd = d12d12[x];}
    else if (Fdie == 20) {dd = d20d12[x];}
  }
  else if (Hdie == 20) {
    if (Fdie == 8) {dd = d20d8[x];}
    else if (Fdie == 10) {dd = d20d10[x];}
    else if (Fdie == 12) {dd = d20d12[x];}
    else if (Fdie == 20) {dd = d20d20[x];}
  }
  return dd;  
}

function calcAdvantage(x) {
  var adv = 0;
  if (Hdie == 8) {
    if (Fdie == 8) {
      if (Adie == 6) {adv = d8d8d6[x];}
      else if (Adie == 8) {adv = d8d8d8[x];}
      else if (Adie == 10) {adv = d10d8d8[x];}
    }
    else if (Fdie == 10) {
      if (Adie == 6) {adv = d10d8d6[x];}
      else if (Adie == 8) {adv = d8d8d8[x];}
      else if (Adie == 10) {adv = d10d10d8[x];}
    }
    else if (Fdie == 12) {
      if (Adie == 6) {adv = d12d8d6[x];}
      else if (Adie == 8) {adv = d12d8d8[x];}
      else if (Adie == 10) {adv = d12d10d8[x];}
    }
    else if (Fdie == 20) {
      if (Adie == 6) {adv = d20d8d6[x];}
      else if (Adie == 8) {adv = d20d8d8[x];}
      else if (Adie == 10) {adv = d20d10d8[x];}
    }
  }
  else if (Hdie == 10) {
    if (Fdie == 8) {
      if (Adie == 6) {adv = d10d8d6[x];}
      else if (Adie == 8) {adv = d10d8d8[x];}
      else if (Adie == 10) {adv = d10d10d8[x];}
    }
    else if (Fdie == 10) {
      if (Adie == 6) {adv = d10d10d6[x];}
      else if (Adie == 8) {adv = d10d10d8[x];}
      else if (Adie == 10) {adv = d10d10d10[x];}
    }
    else if (Fdie == 12) {
      if (Adie == 6) {adv = d12d10d6[x];}
      else if (Adie == 8) {adv = d12d10d8[x];}
      else if (Adie == 10) {adv = d12d10d10[x];}
    }
    else if (Fdie == 20) {
      if (Adie == 6) {adv = d20d10d6[x];}
      else if (Adie == 8) {adv = d20d10d8[x];}
      else if (Adie == 10) {adv = d20d10d10[x];}
    }
  }
  else if (Hdie == 12) {
    if (Fdie == 8) {
      if (Adie == 6) {adv = d12d8d6[x];}
      else if (Adie == 8) {adv = d12d8d8[x];}
      else if (Adie == 10) {adv = d12d10d10[x];}
    }
    else if (Fdie == 10) {
      if (Adie == 6) {adv = d12d10d6[x];}
      else if (Adie == 8) {adv = d12d10d8[x];}
      else if (Adie == 10) {adv = d12d10d10[x];}
    }
    else if (Fdie == 12) {
      if (Adie == 6) {adv = d12d12d6[x];}
      else if (Adie == 8) {adv = d12d12d8[x];}
      else if (Adie == 10) {adv = d12d12d10[x];}
    }
    else if (Fdie == 20) {
      if (Adie == 6) {adv = d20d12d6[x];}
      else if (Adie == 8) {adv = d20d12d8[x];}
      else if (Adie == 10) {adv = d20d12d10[x];}
    }
  }
  else if (Hdie == 20) {
    if (Fdie == 8) {
      if (Adie == 6) {adv = d20d8d6[x];}
      else if (Adie == 8) {adv = d20d8d8[x];}
      else if (Adie == 10) {adv = d20d10d10[x];}
    }
    else if (Fdie == 10) {
      if (Adie == 6) {adv = d20d10d6[x];}
      else if (Adie == 8) {adv = d20d10d8[x];}
      else if (Adie == 10) {adv = d20d10d10[x];}
    }
    else if (Fdie == 12) {
      if (Adie == 6) {adv = d20d12d6[x];}
      else if (Adie == 8) {adv = d20d12d8[x];}
      else if (Adie == 10) {adv = d20d12d10[x];}
    }
    else if (Fdie == 20) {
      if (Adie == 6) {adv = d20d20d6[x];}
      else if (Adie == 8) {adv = d20d20d8[x];}
      else if (Adie == 10) {adv = d20d20d10[x];}
    }
  }
  return adv;
}

// Populate Adversary Benchmarks
function populateAdversaryBenchmarks() {
  for (let i = 1; i < 21; i++) {
    populateAdversaryBenchmarkRow(i);
  }
}
function populateAdversaryBenchmarkRow(x) {
  // gather row data
  var rowDADV = calcAdversaryDisadvantage(x-1);
  var rowD20 = calcAdversaryD20(x-1);
  var rowADV = calcAdversaryAdvantage(x-1);
  // string rows
  var xAdversaryDifficulty = "adversary-" + x + "-difficulty";
  var xAdversaryDisadvantage = "adversary-" + x + "-disadvantage-percent";
  var xAdversaryDuality = "adversary-" + x + "-d20-percent";
  var xAdversaryAdvantage = "adversary-" + x + "-advantage-percent";
  // populate row
  document.getElementById(xAdversaryDifficulty).innerHTML = x;
  document.getElementById(xAdversaryDisadvantage).innerHTML = calcPercentage(rowDADV,100);
  document.getElementById(xAdversaryDuality).innerHTML = calcPercentage(rowD20,100);
  document.getElementById(xAdversaryAdvantage).innerHTML = calcPercentage(rowADV,100);
  // populate chart by difference
  $("#adversary-" + x + "-disadvantage-chart").css("width", calcPercentage((rowDADV),100));
  $("#adversary-" + x + "-d20-chart").css("width", calcPercentage((rowD20 - rowDADV),100));
  $("#adversary-" + x + "-advantage-chart").css("width", calcPercentage((rowADV - rowD20),100));
}
function calcAdversaryDisadvantage(x) {
  return d20dadv[x];
}
function calcAdversaryD20(x) {
  return d20[x];
}
function calcAdversaryAdvantage(x) {
  return d20adv[x];
}

// Listen Hope
document.getElementById("benchmark-hope-d8").addEventListener("click", function (event) { setHdie(8); });
document.getElementById("benchmark-hope-d10").addEventListener("click", function (event) { setHdie(10); });
document.getElementById("benchmark-hope-d12").addEventListener("click", function (event) { setHdie(12); });
document.getElementById("benchmark-hope-d20").addEventListener("click", function (event) { setHdie(20); });
// Listen Fear
document.getElementById("benchmark-fear-d8").addEventListener("click", function (event) { setFdie(8); });
document.getElementById("benchmark-fear-d10").addEventListener("click", function (event) { setFdie(10); });
document.getElementById("benchmark-fear-d12").addEventListener("click", function (event) { setFdie(12); });
document.getElementById("benchmark-fear-d20").addEventListener("click", function (event) { setFdie(20); });
// Listen Advantage
document.getElementById("benchmark-advantage-d6").addEventListener("click", function (event) { setAdie(6); });
document.getElementById("benchmark-advantage-d8").addEventListener("click", function (event) { setAdie(8); });
document.getElementById("benchmark-advantage-d10").addEventListener("click", function (event) { setAdie(10); });
// Listen Disadvantage
document.getElementById("benchmark-disadvantage-d6").addEventListener("click", function (event) { setDdie(6); });
document.getElementById("benchmark-disadvantage-d8").addEventListener("click", function (event) { setDdie(8); });
document.getElementById("benchmark-disadvantage-d10").addEventListener("click", function (event) { setDdie(10); });
