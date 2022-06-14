const data = {
    "facilities": [
        {
            "id": 1,
            "facility_name": "Monika-1",
            "is_published": true,
            "resource_names": [
                {
                    "id": 1,
                    "name": "res-1",
                    "resource_size": "11v11",
                    "resource_size_count": 4,
                    "available_resources": [
                        {
                            "required_subresource_size": 2,
                            "subresource_size": "10v10"
                        },
                        {
                            "required_subresource_size": 2,
                            "subresource_size": "9v9"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "res-2",
                    "resource_size": "11v11",
                    "resource_size_count": 3,
                    "available_resources": [
                        {
                            "required_subresource_size": 2,
                            "subresource_size": "10v10"
                        },
                        {
                            "required_subresource_size": 2,
                            "subresource_size": "9v9"
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "res-3",
                    "resource_size": "10v10",
                    "resource_size_count": 6,
                    "available_resources": [
                        {
                            "required_subresource_size": 2,
                            "subresource_size": "8v8"
                        }
                    ]
                },
                {
                    "id": 4,
                    "name": "res-4",
                    "resource_size": "10v10",
                    "resource_size_count": 2,
                    "available_resources": [
                        {
                            "required_subresource_size": 2,
                            "subresource_size": "8v8"
                        }
                    ]
                },
                {
                    "id": 5,
                    "name": "res-5",
                    "resource_size": "10v10",
                    "resource_size_count": 2,
                    "available_resources": [
                        {
                            "required_subresource_size": 2,
                            "subresource_size": "8v8"
                        }
                    ]
                },
                {
                    "id": 6,
                    "name": "res-6",
                    "resource_size": "10v10",
                    "resource_size_count": 2,
                    "available_resources": [
                        {
                            "required_subresource_size": 2,
                            "subresource_size": "8v8"
                        }
                    ]
                }
            ]
        }
    ],
    "programs": [
        {
            "id": 144,
            "name": "Program updated version",
            "program_type": "tournament",
            "category": "Football",
            "divisions": [
                {
                    "id": 192,
                    "name": "uyyyyy",
                    "resource_size": "new Resource",
                    "resource_size_count": 6,
                    "events": [
                        {
                            "eventId": 628,
                            "division_id": 192,
                            "event_date": "08/13/22",
                            "start_time": "11:00 AM",
                            "end_time": "12:00 PM",
                            "resource_name": "Res4",
                            "subresource": 2,
                            "facility_detail_id": 1,
                            "onCalendar": false,
                            "status": "draft_calendar",
                            "resource_id": 2
                        },
                        {
                            "eventId": 637,
                            "division_id": 192,
                            "event_date": "08/13/22",
                            "start_time": "01:30 AM",
                            "end_time": "02:30 AM",
                            "resource_name": "Res4",
                            "subresource": 2,
                            "facility_detail_id": 1,
                            "onCalendar": false,
                            "status": "draft_calendar",
                            "resource_id": 2,
                        },
                        {
                            "eventId": 638,
                            "division_id": 192,
                            "event_date": "08/13/22",
                            "start_time": "12:00 AM",
                            "end_time": "12:30 AM",
                            "resource_name": "Res4",
                            "subresource": 3,
                            "facility_detail_id": 1,
                            "onCalendar": false,
                            "status": "draft_calendar",
                            "hasConflict": true,
                            "resource_id": 2
                        },
                        {
                            "eventId": 639,
                            "division_id": 192,
                            "event_date": "08/13/22",
                            "start_time": "12:30 PM",
                            "end_time": "01:00 PM",
                            "resource_name": "Res4",
                            "subresource": 2,
                            "facility_detail_id": 1,
                            "onCalendar": false,
                            "status": "draft_calendar",
                            "hasConflict": false,
                            "resource_id": 2
                        }
                    ]
                }
            ],
            "facility": {
                "id": 1,
            }
        }
    ],
    "Events": [
        {
            "eventId": 627,
            "division_id": 192,
            "event_date": "08/13/22",
            "start_time": "10:00 AM",
            "end_time": "11:00 PM",
            "resource_name": "Res4",
            "subresource": 4,
            "facility_detail_id": 1,
            "onCalendar": true,
            "status": "scheduled",
            "hasConflict": false,
            "resource_id": 1,
        },
        {
            "eventId": 628,
            "division_id": 192,
            "event_date": "08/13/22",
            "start_time": "11:00 AM",
            "end_time": "12:00 PM",
            "resource_name": "Res4",
            "subresource": 2,
            "facility_detail_id": 1,
            "onCalendar": false,
            "status": "draft_calendar",
            "resource_id": 2
        },
        {
            "eventId": 637,
            "division_id": 192,
            "event_date": "08/13/22",
            "start_time": "01:30 AM",
            "end_time": "02:30 AM",
            "resource_name": "Res4",
            "subresource": 2,
            "facility_detail_id": 1,
            "onCalendar": false,
            "status": "draft_calendar",
            "resource_id": 2,
        },
        {
            "eventId": 638,
            "division_id": 192,
            "event_date": "08/13/22",
            "start_time": "12:00 AM",
            "end_time": "12:30 AM",
            "resource_name": "Res4",
            "subresource": 3,
            "facility_detail_id": 1,
            "onCalendar": false,
            "status": "draft_calendar",
            "hasConflict": true,
            "resource_id": 2
        },
        {
            "eventId": 639,
            "division_id": 192,
            "event_date": "08/13/22",
            "start_time": "12:30 PM",
            "end_time": "01:00 PM",
            "resource_name": "Res4",
            "subresource": 2,
            "facility_detail_id": 1,
            "onCalendar": false,
            "status": "draft_calendar",
            "hasConflict": false,
            "resource_id": 2
        },
        {
            "eventId": 640,
            "division_id": 192,
            "event_date": "08/13/22",
            "start_time": "12:30 PM",
            "end_time": "01:00 PM",
            "resource_name": "Res4",
            "subresource": 4,
            "facility_detail_id": 1,
            "onCalendar": true,
            "status": "scheduled",
            "hasConflict": false,
            "resource_id": 3
        }
    ]
}


export default data;