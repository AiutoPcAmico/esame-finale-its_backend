import courses from "../data/courses.json" assert { type: "json" };

async function apiGetAllCourses(req, res) {
  console.log("\n[GET] Getting all courses");
  const retrieved = {
    data: courses,
    error: false,
    status: 200,
  };

  res.status(retrieved.status).send(retrieved);
}

function apiCourseDetail(idCourse) {
  console.log("Search id course " + idCourse);

  var details = courses.find((single) => {
    return single.id === idCourse;
  });
  return details;
}

export { apiGetAllCourses, apiCourseDetail };
