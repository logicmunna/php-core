<?php include "includes/header.php"; ?>

<section class="py-5 bg-light">

    <div class="container">
        <div class="row">
            <?php foreach ($courses as $course){?>
            <div class="col-md-4 col-sm-6">
                <div class="card">
                    <img src="<?php echo $course['image']; ?>" alt="" height="250">
                    <div class="card-body">
                        <h5><?php echo $course['title']; ?></h5>
                        <p><?php echo $course['duration']; ?></p>
                        <p><?php echo $course['price']; ?></p>
                        <a href="web.php?page=read-more&&id=<?php echo $course['id']?>" class="btn btn-success">Read More</a>
                    </div>
                </div>

            </div>
            <?php }?>
        </div>
    </div>
</section>


<?php include "includes/footer.php"; ?>