<?php

namespace App\classes;

class Course
{
    public $courses = [];

    public function __construct(){
        $this->courses = [
            0 => [
                'id' => 1,
                'title' => 'web Design & Development',
                'duration' => '3 month',
                'price' => 15000,
                'description' => 'Web Design & Development Course Description',
                'image' => 'assets/img/web.jpg'
                ],
            1 => [
                'id' => 2,
                'title' => 'Python Development',
                'duration' => '3 month',
                'price' => 18000,
                'description' => 'Python Programming Course Description',
                'image' => 'assets/img/Python.png'
            ],
            2 => [
                'id' => 3,
                'title' => 'Basic to IELTS',
                'duration' => '5 month',
                'price' => 27000,
                'description' => 'Basic to IELTS Course Description',
                'image' => 'assets/img/ielts.jpg'
            ]
        ];
    }

    public function getAllCourse(){
        return $this->courses;
    }

    public function getCourseByID($id){
        foreach ($this->courses as $course){
            if ($course['id'] == $id){
                return $course;
            }
        }
    }
}