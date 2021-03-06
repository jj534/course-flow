// import { createSlice } from '@reduxjs/toolkit'
// import { PlanState } from 'src/types/redux'

// const initialState: PlanState = {
//   semesters: [],
//   major: null,
// }

// /*
// /plan/:psid
// created even for unauthed users
// :psid is source of truth for both authed and unauthed users
// no need to use redux as a source of truth for plan

// */

// const reorder = (list: string[], startIndex: number, endIndex: number) => {
//   const result = [...list]
//   const [removed] = result.splice(startIndex, 1)
//   result.splice(endIndex, 0, removed)
//   return result
// }

// const moveBetweenLists = (source: string[], destination: string[], droppableSource: any, droppableDestination: any) => {
//   const sourceClone = [...source]
//   const destClone = [...destination]
//   const [removed] = sourceClone.splice(droppableSource.index, 1)

//   destClone.splice(droppableDestination.index, 0, removed)

//   const result = {}
//   result[droppableSource.droppableId] = sourceClone
//   result[droppableDestination.droppableId] = destClone

//   return result
// }

// const planSlice = createSlice({
//   name: 'plan',
//   initialState,
//   reducers: {
//     addRequirement: (state, { payload }) => {
//       const { semesterNumber, row, requirement } = payload
//       state.semesters[semesterNumber].splice(row, 0, requirement)
//     },

//     replaceRequirement: (state, { payload }) => {
//       const { semesterNumber, row, requirement } = payload
//       state.semesters[semesterNumber].splice(row, 1, requirement)
//     },

//     removeRequirement: (state, { payload }) => {
//       const { semesterNumber, row } = payload
//       state.semesters[semesterNumber].splice(row, 1)
//     },

//     initPlan: (state, { payload }) => {
//       const { semesters, idToRequirement } = payload
//       state.idToRequirement = idToRequirement
//       state.semesters = semesters
//       state.isInit = true
//     },

//     dragEnd: (state, { payload }) => {
//       const { source, destination } = payload

//       const sourceSemesterNumber = +source.droppableId
//       const destSemesterNumber = +destination.droppableId

//       if (sourceSemesterNumber === destSemesterNumber) {
//         // movement within the same list
//         state.semesters[sourceSemesterNumber] = reorder(state.semesters[sourceSemesterNumber], source.index, destination.index)
//       } else {
//         // movement between different lists
//         const result = moveBetweenLists(state.semesters[sourceSemesterNumber], state.semesters[destSemesterNumber], source, destination)
//         state.semesters[sourceSemesterNumber] = result[sourceSemesterNumber]
//         state.semesters[destSemesterNumber] = result[destSemesterNumber]
//       }
//     },

//     assignCourse: (state, { payload }) => {
//       const { requirementId, courseData } = payload
//       state.idToRequirement[requirementId].assignedCourse = courseData
//       state.idToRequirement[requirementId].assignedCourseId = courseData.crseId
//     },

//     unassignCourse: (state, { payload }) => {
//       const { requirementId } = payload
//       state.idToRequirement[requirementId].assignedCourse = null
//       state.idToRequirement[requirementId].assignedCourseId = null
//     },
//   },
// })

// export const { unassignCourse, addRequirement, initPlan, removeRequirement, dragEnd, assignCourse } = planSlice.actions

// export default planSlice.reducer
