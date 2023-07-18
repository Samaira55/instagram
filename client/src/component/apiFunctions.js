// import React from "react";
// import axios from "axios";



// const apiBaseUrl = "http://localhost:3002/authController";

// export const fetchIntroduction = async (userId, accessToken) => {
//   try {
//     const response = await axios.get(`${apiBaseUrl}/dashboard/introduction`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//       params: {
//         userId: userId,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const fetchAssignedMe = async (userId, accessToken) => {
//   try {
//     const response = await axios.get(`${apiBaseUrl}/dashboard/assignedme`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//       params: {
//         userId: userId,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const fetchProjects = async (userId, accessToken) => {
//   try {
//     const response = await axios.get(`${apiBaseUrl}/dashboard/projects`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//       params: {
//         userId: userId,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const fetchActivityStream = async (userId, accessToken) => {
//   try {
//     const response = await axios.get(`${apiBaseUrl}/dashboard/activitystream`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//       params: {
//         userId: userId,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };


// export const fetchDashBoardData = async (userId) => {
//   try {
//     const response = await axios.post("/dashboard", { id: userId });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

