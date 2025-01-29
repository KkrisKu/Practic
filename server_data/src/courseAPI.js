/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const resWrapper = require("./responceWrapper");

const courseList = require("../db/course_list.json");
const courseSingleId1 = require("../db/course_single_id_1.json");
const courseSingleId2 = require("../db/course_single_id_2.json");
const courseSingleId3 = require("../db/course_single_id_3.json");
const courseSingleId4 = require("../db/course_single_id_4.json");
const courseSingleId5 = require("../db/course_single_id_5.json");
const courseSingleId6 = require("../db/course_single_id_6.json");
const courseSingleId7 = require("../db/course_single_id_7.json");
const courseSingleId8 = require("../db/course_single_id_8.json");

router.get("/", (req, res) => {
  res.json(resWrapper(courseList, 200, "Courses list returned"));
});

router.get("/:id", (req, res) => {
  let courseId = Number(req.params.id);
  let course;
  if (courseId === 1) {
    course = courseSingleId1;
  } else if (courseId === 2) {
    course = courseSingleId2;
  } else if (courseId === 3) {
    course = courseSingleId3;
  } else if (courseId === 4) {
    course = courseSingleId4;
  } else if (courseId === 5) {
    course = courseSingleId5;
  } else if (courseId === 6) {
    course = courseSingleId6;
  } else if (courseId === 7) {
    course = courseSingleId7;
  } else if (courseId === 8) {
    course = courseSingleId8;
  }
  if (course) {
    res.json(resWrapper(course, 200, "Course found"));
  } else {
    res.status(404).json(resWrapper(null, 404, "Course not found")); //{ error: "Course not found" });
  }
});

router.post("/", (req, res) => {
  const { name, type, language, description, duration, author } = req.body;
  const newCourse = {
    id: courseList.length + 1,
    name,
    type,
    language,
    description,
    duration,
    author,
  };
  courseList.push(newCourse, 200, "Course created");
  res.status(201).json(resWrapper(newCourse, 201, "Course created"));
});

router.put("/:id", (req, res) => {
  let courseId = Number(req.params.id);
  let courseIndex = courseList.findIndex((course) => course.id === courseId);
  if (courseIndex !== -1) {
    const { name, type, language, description, duration, author } = req.body;
    const updatedCourse = {
      id: courseId,
      name,
      type,
      language,
      description,
      duration,
      author,
    };
    courseList.splice(courseIndex, 1, updatedCourse);
    res.json(resWrapper(updatedCourse, 200, "Course updated"));
  } else {
    res.status(404).json({ error: "Course not found" });
  }
});

router.delete("/:id", (req, res) => {
  let courseId = Number(req.params.id);
  let courseIndex = courseList.findIndex((course) => course.id === courseId);
  if (courseIndex !== -1) {
    courseList.splice(courseIndex, 1);
    res.json(resWrapper(null, 200, "Course deleted")); //{ message: "Course deleted" });
  } else {
    res.status(404).json(resWrapper(null, 404, "Course not found")); //{ error: "Course not found" });
  }
});

module.exports = router;



// # GET /
// curl -X GET http://localhost:3002/api/v1/course/

// # GET /:id
// curl -X GET http://localhost:3002/api/v1/course/1
// curl -X GET http://localhost:3002/api/v1/course/2
// curl -X GET http://localhost:3002/api/v1/course/3
// curl -X GET http://localhost:3002/api/v1/course/4
// curl -X GET http://localhost:3002/api/v1/course/5
// curl -X GET http://localhost:3002/api/v1/course/6
// curl -X GET http://localhost:3002/api/v1/course/7
// curl -X GET http://localhost:3002/api/v1/course/8

// # POST /
// curl -X POST -H "Content-Type: application/json" -d '{"name": "New Course", "type": "New Type", "language": "New Language", "description": "New Description", "duration": "New Duration", "author": "New Author"}' http://localhost:3002/api/v1/course/

// # PUT /:id
// curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Course", "type": "Updated Type", "language": "Updated Language", "description": "Updated Description", "duration": "Updated Duration", "author": "Updated Author"}' http://localhost:3002/api/v1/course/1

// # DELETE /:id
// curl -X DELETE http://localhost:3002/api/v1/course/1

