import { Injectable } from '@angular/core';
import {db} from "./environments/environment"


@Injectable({ providedIn: 'root' })

export class SearchService {

  planets = [];
  planet = {};


  async getPlanet() {
    try {
      const target = "earth";

      const collection = db.collection("planets");
      const palnetRef = collection.doc(`${target}`);

      const res = await collection.get();
      const doc = await palnetRef.get();

      // 선택된 행성
      const result = doc?.data();
      if (result) {
        this.planet = {
          name: result.name,
          detail: result.detail,
          imgUrl: result.imgUrl,
          orbitPeriod: result.orbitPeriod,
          lengthOfDay: result.lengthOfDay,
          rotationPeriod: result.rotationPeriod,
          surfaceTemperature: result.surfaceTemperature,
          gravity: result.gravity,
        };
        console.log("result", result);
      }

      // 전체 행성

      res.forEach((document) => {
        this.planets.push({
          id: document.data().id,
          name: document.data().name,
          imgUrl: document.data().imgUrl,
        });   
      });
      console.log("planets", this.planets)
    } catch (error) {
        console.log(error);
    }
  }
}