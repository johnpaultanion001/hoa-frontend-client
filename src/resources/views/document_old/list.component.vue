<template>


    <div class="row">
        <div class="col-lg-12 text-center">
            <p class="h2 py-4 my-0">Document Records</p>
        </div>

        <div class="col-lg-12">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-calendar"></i></span></div>
                <input type="date" class="form-control" placeholder="Search for dates..">
            </div>
        </div>
        <div class="col-lg-12 table-responsive">
            <ul class="nav nav-pills nav-fill  font-weight-bold lead" >
                <li class="nav-item border-right-2 border-top border-left rounded-0 w-50">
                    <a :class="{'active ': config.active_tab == 1, ' text-dark': config.active_tab == 2}" @click="config.active_tab = 1" class="nav-link  rounded-0 " href="#">Transaction History</a>
                </li>
                <li class="nav-item border-top border-right w-50">
                    <a :class="{'active': config.active_tab == 2, ' text-dark': config.active_tab == 1}" @click="config.active_tab = 2" class="nav-link rounded-0 " href="#">Violations</a>
                </li>

            </ul>
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Date / Time</th>
                    <th scope="col">Remarks</th>
                    <th scope="col">Billing Type</th>
                </tr>
                </thead>
                <tbody>
                <tr class="table-active">
                    <td>Sample</td>
                    <td>Sample</td>
                    <td>Sample</td>
                    <td>Sample</td>
                    <td>Sample</td>
                </tr>


                </tbody>
            </table>
        </div>

    </div>

</template>

<script src="./list.component.js"></script>
