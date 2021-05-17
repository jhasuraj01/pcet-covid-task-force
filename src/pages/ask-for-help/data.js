export const askForHelpFormData = {
    "central-help-desk": {
        category: "Central Help Desk",
        initialState: {
            patientName: "",
            contactNumber: "",
            message: "",
            err: "",
            token: "",
        },
        inputFields: [
            {
                type: "text",
                name: "patientName",
                placeholder: "Patient Name",
                required: true,
            },
            {
                type: "number",
                name: "contactNumber",
                placeholder: "Contact Number",
                required: true,
            },
            {
                type: "textarea",
                name: "message",
                maxLength: "500",
                placeholder: "Message (Max. 500 char)",
                required: true,
            },
        ],
    },
    "lab-testing": {
        category: "Lab Testing Facility",
        initialState: {
            patientName: "",
            contactNumber: "",
            age: "",
            tests: "",
            requiredBy: "",
            area: "",
            city: "",
            message: "",
            err: "",
            token: "",
        },
        inputFields: [
            {
                type: "text",
                name: "patientName",
                placeholder: "Patient Name",
                required: true,
            },
            {
                type: "number",
                name: "contactNumber",
                placeholder: "Contact Number",
                required: true,
            },
            {
                type: "number",
                name: "age",
                placeholder: "Age",
                required: true,
            },
            {
                type: "text",
                name: "tests",
                placeholder: "Tests to be done",
                required: true,
            },
            {
                type: "date",
                name: "requiredBy",
                placeholder: "Required By",
                required: true,
            },
            {
                type: "text",
                name: "area",
                placeholder: "Area",
                required: true,
            },
            {
                type: "text",
                name: "city",
                placeholder: "City",
                required: true,
            },
            {
                type: "textarea",
                name: "message",
                maxLength: "500",
                placeholder: "Message (Max. 500 char)",
                required: true,
            },
        ],
    },
    "hospital-admission": {
        category: "Hospital Admission",
        initialState: {
            patientName: "",
            contactNumber: "",
            age: "",
            healthCondition: "",
            requiredBy: "",
            area: "",
            city: "",
            message: "",
            err: "",
            token: "",
        },
        inputFields: [
            {
                type: "text",
                name: "patientName",
                placeholder: "Patient Name",
                required: true,
            },
            {
                type: "number",
                name: "contactNumber",
                placeholder: "Contact Number",
                required: true,
            },
            {
                type: "number",
                name: "age",
                placeholder: "Age",
                required: true,
            },
            {
                type: "text",
                name: "healthCondition",
                placeholder: "Health Condition",
                required: true,
            },
            {
                type: "date",
                name: "requiredBy",
                placeholder: "Required By",
                required: true,
            },
            {
                type: "text",
                name: "area",
                placeholder: "Area",
                required: true,
            },
            {
                type: "text",
                name: "city",
                placeholder: "City",
                required: true,
            },
            {
                type: "textarea",
                name: "message",
                maxLength: "500",
                placeholder: "Message (Max. 500 char)",
                required: true,
            },
        ],
    },
    "o2-bed-and-ventilator": {
        category: "Oxygen Bed and Ventilator",
        initialState: {
            patientName: "",
            contactNumber: "",
            age: "",
            healthCondition: "",
            o2Level: "",
            requiredBy: "",
            area: "",
            city: "",
            message: "",
            err: "",
            token: "",
        },
        inputFields: [
            {
                type: "text",
                name: "patientName",
                placeholder: "Patient Name",
                required: true,
            },
            {
                type: "number",
                name: "contactNumber",
                placeholder: "Contact Number",
                required: true,
            },
            {
                type: "number",
                name: "age",
                placeholder: "Age",
                required: true,
            },
            {
                type: "text",
                name: "healthCondition",
                placeholder: "Health Condition",
                required: true,
            },
            {
                type: "number",
                name: "o2Level",
                placeholder: "Oxygen Level",
                required: true,
            },
            {
                type: "date",
                name: "requiredBy",
                placeholder: "Required By",
                required: true,
            },
            {
                type: "text",
                name: "area",
                placeholder: "Area",
                required: true,
            },
            {
                type: "text",
                name: "city",
                placeholder: "City",
                required: true,
            },
            {
                type: "textarea",
                name: "message",
                maxLength: "500",
                placeholder: "Message (Max. 500 char)",
                required: true,
            },
        ],
    },
    medicines: {
        category: "Medicines",
        initialState: {
            patientName: "",
            contactNumber: "",
            age: "",
            healthCondition: "",
            medicinesRequired: "",
            requiredBy: "",
            area: "",
            city: "",
            message: "",
            err: "",
            token: "",
        },
        inputFields: [
            {
                type: "text",
                name: "patientName",
                placeholder: "Patient Name",
                required: true,
            },
            {
                type: "number",
                name: "contactNumber",
                placeholder: "Contact Number",
                required: true,
            },
            {
                type: "number",
                name: "age",
                placeholder: "Age",
                required: true,
            },
            {
                type: "text",
                name: "healthCondition",
                placeholder: "Health Condition",
                required: true,
            },
            {
                type: "text",
                name: "medicinesRequired",
                placeholder: "Medicines Required",
                required: true,
            },
            {
                type: "date",
                name: "requiredBy",
                placeholder: "Required By",
                required: true,
            },
            {
                type: "text",
                name: "area",
                placeholder: "Area",
                required: true,
            },
            {
                type: "text",
                name: "city",
                placeholder: "City",
                required: true,
            },
            {
                type: "textarea",
                name: "message",
                maxLength: "500",
                placeholder: "Message (Max. 500 char)",
                required: true,
            },
        ],
    },
    "blood-and-plasma": {
        category: "Blood and Plasma",
        initialState: {
            patientName: "",
            contactNumber: "",
            age: "",
            bloodOrPlasma: "Blood",
            bloodGroup: "O+ve",
            healthCondition: "",
            requiredBy: "",
            area: "",
            city: "",
            hospital: "",
            message: "",
            err: "",
            token: "",
        },
        inputFields: [
            {
                type: "text",
                name: "patientName",
                placeholder: "Patient Name",
                required: true,
            },
            {
                type: "number",
                name: "contactNumber",
                placeholder: "Contact Number",
                required: true,
            },
            {
                type: "number",
                name: "age",
                placeholder: "Age",
                required: true,
            },

            {
                type: "select",
                name: "bloodOrPlasma",
                placeholder: "Required",
                options: ["Blood", "Plasma"],
                required: true,
            },
            {
                type: "select",
                name: "bloodGroup",
                placeholder: "Blood Group",
                options: [
                    "O+ve",
                    "A+ve",
                    "B+ve",
                    "AB+ve",
                    "O-ve",
                    "A-ve",
                    "B-ve",
                    "AB-ve",
                ],
                required: true,
            },
            {
                type: "text",
                name: "healthCondition",
                placeholder: "Health Condition",
                required: true,
            },
            {
                type: "date",
                name: "requiredBy",
                placeholder: "Required By",
                required: true,
            },
            {
                type: "text",
                name: "area",
                placeholder: "Area",
                required: true,
            },
            {
                type: "text",
                name: "city",
                placeholder: "City",
                required: true,
            },
            {
                type: "text",
                name: "hospital",
                placeholder: "Hospital",
                required: true,
            },
            {
                type: "textarea",
                name: "message",
                maxLength: "500",
                placeholder: "Message (Max. 500 char)",
                required: true,
            },
        ],
    },
    "moral-support": {
        category: "Moral Support",
        initialState: {
            patientName: "",
            contactNumber: "",
            message: "",
            err: "",
            token: "",
        },
        inputFields: [
            {
                type: "text",
                name: "patientName",
                placeholder: "Patient Name",
                required: true,
            },
            {
                type: "number",
                name: "contactNumber",
                placeholder: "Contact Number",
                required: true,
            },
            {
                type: "textarea",
                name: "message",
                maxLength: "500",
                placeholder: "Message (Max. 500 char)",
                required: true,
            },
        ],
    },
    vaccination: {
        category: "Vaccination",
        initialState: {
            name: "",
            contactNumber: "",
            message: "",
            err: "",
            token: "",
        },
        inputFields: [
            {
                type: "text",
                name: "name",
                placeholder: "Full Name",
                required: true,
            },
            {
                type: "number",
                name: "contactNumber",
                placeholder: "Contact Number",
                required: true,
            },
            {
                type: "textarea",
                name: "message",
                maxLength: "500",
                placeholder: "Message (Max. 500 char)",
                required: true,
            },
        ],
    },
    "doctors-for-suggestion": {
        category: "Vaccination",
        initialState: {
            patientName: "",
            contactNumber: "",
            message: "",
            err: "",
            token: "",
        },
        inputFields: [
            {
                type: "text",
                name: "patientName",
                placeholder: "Patient Name",
                required: true,
            },
            {
                type: "number",
                name: "contactNumber",
                placeholder: "Contact Number",
                required: true,
            },
            {
                type: "textarea",
                name: "message",
                maxLength: "500",
                placeholder: "Message (Max. 500 char)",
                required: true,
            },
        ],
    },
    food: {
        category: "Food Availability for the needy",
        initialState: {
            name: "",
            contactNumber: "",
            area: "",
            city: "",
            message: "",
            err: "",
            token: "",
        },
        inputFields: [
            {
                type: "text",
                name: "name",
                placeholder: "Full Name",
                required: true,
            },
            {
                type: "number",
                name: "contactNumber",
                placeholder: "Contact Number",
                required: true,
            },
            {
                type: "text",
                name: "area",
                placeholder: "Area",
                required: true,
            },
            {
                type: "text",
                name: "city",
                placeholder: "City",
                required: true,
            },
            {
                type: "textarea",
                name: "message",
                maxLength: "500",
                placeholder: "Message (Max. 500 char)",
                required: true,
            },
        ],
    },
    "post-covid-communication": {
        category: "Post Covid Communication",
        initialState: {
            patientName: "",
            contactNumber: "",
            bloodGroup: "O+ve",
            dateOfRecovery: "",
            message: "",
            err: "",
            token: "",
        },
        inputFields: [
            {
                type: "text",
                name: "patientName",
                placeholder: "Patient Name",
                required: true,
            },
            {
                type: "number",
                name: "contactNumber",
                placeholder: "Contact Number",
                required: true,
            },
            {
                type: "select",
                name: "bloodGroup",
                placeholder: "Blood Group",
                options: [
                    "O+ve",
                    "A+ve",
                    "B+ve",
                    "AB+ve",
                    "O-ve",
                    "A-ve",
                    "B-ve",
                    "AB-ve",
                ],
                required: true,
            },
            {
                type: "date",
                name: "dateOfRecovery",
                placeholder: "Recovery Date",
                required: true,
            },
            {
                type: "textarea",
                name: "message",
                maxLength: "500",
                placeholder: "Message (Max. 500 char)",
                required: true,
            },
        ],
    },
    "technical-support": {
        category: "Technical Support",
        initialState: {
            name: "",
            contactNumber: "",
            message: "",
            err: "",
            token: "",
        },
        inputFields: [
            {
                type: "text",
                name: "name",
                placeholder: "Full Name",
                required: true,
            },
            {
                type: "number",
                name: "contactNumber",
                placeholder: "Contact Number",
                required: true,
            },
            {
                type: "textarea",
                name: "message",
                maxLength: "500",
                placeholder: "Message (Max. 500 char)",
                required: true,
            },
        ],
    },
};