<?php include "includes/header.php"; ?>

<section class="py-5 bg-success">

    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <div class="card card-body">
                    <img src="<?php echo $course['image']; ?>" alt="">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card-body card">
                    <h1><?php echo $course['title']; ?></h1>
                    <h4><?php echo $course['duration']; ?></h4>
                    <h4><?php echo $course['price']; ?></h4>
                    <h4><?php echo $course['description']; ?></h4>
                </div>
            </div>
        </div>
    </div>
</section>


<?php include "includes/footer.php"; ?>