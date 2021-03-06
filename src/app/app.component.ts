import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private sampleSegment: any = {
    "id": "6a96244d-cf01-43ac-adc4-f43e731694c9",
    "name": "Present on Saturday 12th ",
    "segmentType": "ALL",
    "filters": [
        {
            "id": "537be5db-2345-4897-bd2d-cb0c43bc4e9c",
            "filterType": "IN_BETWEEN",
            "regionId": "d20cc7e5-a297-4c37-8f5d-ff3cd019f23b",
            "from": "1531544400000",
            "to": "1531594800000"
        }
    ],
    "segments": [{
        "id": "f24a45cf-4726-4010-8d07-f2ea6bb3ef80",
        "name": "Present in last hour ",
        "segmentType": "ALL",
        "filters": [
            {
                "id": "c2e4742e-cf5b-4bff-ae40-f399c1a931fe",
                "filterType": "IN_BETWEEN",
                "regionId": "d20cc7e5-a297-4c37-8f5d-ff3cd019f23b",
                "from": "1531667700000",
                "to": "9999999999999"
            }
        ],
        "segments": [],
        "hidden": false
    },
    {
        "id": "234",
        "name": "Present in 2 hour ",
        "segmentType": "ANY",
        "filters": [
            {
                "id": "9c57f954-a6a6-4d0b-8da0-efb973ecd023",
                "filterType": "IN_BETWEEN",
                "regionId": "d20cc7e5-a297-4c37-8f5d-ff3cd019f23b",
                "from": "1531371600000",
                "to": "1531458000000"
            }
        ],
        "segments": [{
            "id": "632",
            "name": "Present in 5 hour ",
            "segmentType": "ANY",
            "filters": [
                {
                    "id": "74beea43-5ae9-4c2e-94c9-0a5cbd0b8528",
                    "filterType": "IN_BETWEEN",
                    "regionId": "e31edc70-1b3c-4e7d-83f1-6b4e741fabcd",
                    "from": "1531371600000",
                    "to": "1531458000000"
                }
            ],
            "segments": [],
            "hidden": false

        }],
        "hidden": false
    }				
],
"hidden": false
}

  title = 'RecursiveComponents';
}
