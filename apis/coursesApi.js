import originalCourses from "../data/courses.json" assert { type: "json" };
const courses = originalCourses;

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

async function reduceSeats(idCourse) {
  //Initailize array of objects.
  console.log(idCourse);

  //Find index of specific object using findIndex method.
  objIndex = courses.findIndex((obj) => obj.id === idCourse);
  console.log(objIndex);

  //Update object's available property.
  myArray[objIndex].available = myArray[objIndex].available - 1;

  //update original array
  courses = myArray;
}

export { apiGetAllCourses, apiCourseDetail, reduceSeats };
