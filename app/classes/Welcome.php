<?php 
namespace App\classes;
use App\classes\Courses;


class Welcome
{
    public function index()
    {
        $course = new Course();
        $courses = $course->getAllCourse();
        return view("home", ['courses' => $courses]); 
    }

    public function about()
    {
        return view("about"); 
    }

    public function calculator()
    {
        return view("calculator"); 
    }

    public function readMore($id){
        $course = new Course();
        $singleCourse = $course->getCourseById($id);
        return view("read-more", ['course' => $singleCourse]);
    }

}