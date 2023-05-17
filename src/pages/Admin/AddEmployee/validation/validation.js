import * as yup from "yup";

export const FormSchema = yup.object().shape({
    fullName: yup.string("enter the text").min(5,"5 herfden chox yaz").required("is Required"),
    age: yup.number("reqem yaz").integer("tam eded olsun").positive("musbet reqem olsun").required("xanani doldurun"),
    salary: yup.number("reqem yaz").integer("tam eded olsun").min(2500,"azdir").positive("musbet reqem olsun").required("xanani doldurun"),
    position: yup.string().oneOf(['developer','designer','supervisor','manager','engineer'],"invalid job type position")
});