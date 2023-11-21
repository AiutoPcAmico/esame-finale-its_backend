import reservations from "../data/reservations.json" assert { type: "json" };
import { makeId } from "../utils/makeId.js";
import { apiCourseDetail, reduceSeats } from "./coursesApi.js";
import { apiGetGymDetails } from "./gymsApi.js";
var localReservations = reservations;

async function apiGetAllReservations(req, res) {
  console.log("\n[GET] Getting all reservations");

  const completed = localReservations.map((el) => {
    const singleDetail = apiGetGymDetails(el.idGym);
    const courseDetail = apiCourseDetail(el.idCourse);

    const obj = {
      id: el.id,
      user: el.user,
      course: courseDetail.name,
      gym: singleDetail.name,
      dateTime: courseDetail.dateTime,
    };
    console.log({ obj });
    return obj;
  });
  const retrieved = {
    data: completed,
    error: false,
    status: 200,
  };

  console.log(retrieved);
  res.status(retrieved.status).send(retrieved);
}

async function apiPutReservation(req, res) {
  console.log("\n[PUT] Adding a reservation");
  if (!req.body?.username || !req.body?.idGym || !req.body?.idCourse) {
    res.status(400).send("Please, provide username, idGym and idCourse!");
  } else {
    try {
      //if I have all required elements
      localReservations.push({
        user: req.body.username,
        idGym: req.body.idGym,
        idCourse: req.body.idCourse,
        id: makeId(4),
      });

      //i reduce the seats
      //not yet tested completely
      //await reduceSeats(req.body.idCourse);
      res.status(201).send({ data: "reservation added!", error: false });
    } catch (error) {
      res
        .status(500)
        .send({ data: "Strange situation, plase retry!", error: true });
    }
  }
}

export { apiGetAllReservations, apiPutReservation };
