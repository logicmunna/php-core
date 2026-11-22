<?php include "includes/header.php"; ?>

<section class="calculator-section">
    <div class="container">
        <div class="row">
            <div class="col-md-7 mx-auto">
                <div class="card calculator-card">
                    <div class="card-header">Calculator Program</div>
                    <div class="card-body">
                        <form action="web.php" method="POST">
                            <div class="mb-3 row">
                                <label for="" class="col-md-3">First Number</label>
                                <div class="col-md-9">
                                    <input type="number" name="first_number" class="form-control">
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="" class="col-md-3">Last Number</label>
                                <div class="col-md-9">
                                    <input type="number" name="last_number" class="form-control">
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="" class="col-md-3">Your Choice</label>
                                <div class="col-md-9">
                                    <div class="radio-group">
                                        <label><input type="radio" name="operator" name="operator" value="+"> <span>+</span></label>
                                        <label><input type="radio" name="operator" name="operator" value="-"> <span>-</span></label>
                                        <label><input type="radio" name="operator" name="operator" value="*"> <span>×</span></label>
                                        <label><input type="radio" name="operator" name="operator" value="/"> <span>÷</span></label>
                                        <label><input type="radio" name="operator" name="operator" value="%"> <span>%</span></label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="" class="col-md-3">Result</label>
                                <div class="col-md-9">
                                    <input type="number" class="form-control result-field" readonly>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="" class="col-md-3"></label>
                                <div class="col-md-9">
                                    <input type="submit" name="calculator-btn" class="btn btn-success" value="Make Result">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include "includes/footer.php"; ?>