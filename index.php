<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>FIMU Stats</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
   <header>   		
		<div class="container-fluid" id="header">
			<div class="container">
				<div class="row">

					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="logos">
						<img src="assets/img/header/logo_orange.png" alt="logo Orange" width="150" height="150" />

						<h1 class="text-center">FIMU-View</h1>

						<img src="assets/img/header/logo_fimu.png" alt="logo FIMU" width="auto" height="150" />
					</div>
				</div>
			</div>

			<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="no-padding">
							<nav class="navbar navbar-default">
								<div class="container">
									<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

										<div class="navbar-header">
											<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
												 <span class="icon-bar"></span>
												 <span class="icon-bar"></span>
												 <span class="icon-bar"></span>
											</button>
										</div>

										<div class="collapse navbar-collapse" id="myNavbar">
											<ul class="nav navbar-nav">
												<li><a href="#bloc1">Fréquentation<br/>Globale</a></li>
												<li><a href="#bloc2">Fréquentation<br/>Journalière</a></li>
												<li><a href="#bloc3">Nuitées</a></li>
												<li><a href="#">Fréquentation<br/>Tranche d'âge</a></li>
											</ul>
										</div>

									</div>
								</div>
							</nav>
					</div>
				</div>
		</div>
</header>
   <main>
   		<div class="container-fluid" id="bloc1">
			<div class="container">
				<div class="row text-center">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h2>Fréquentation globale</h2>
					</div>
					<div class="flex-div col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<div id="graphique">
							<div id="FreqGlobale2016"></div>
						</div>
						<div class="flex-btn btn-group" data-toggle="buttons">
							<label class="btn btn-primary active">
							<input type="radio" name="options" class="periode" id="avant" autocomplete="off" > Semaine précédente
							</label>
							<label class="btn btn-primary">
							<input type="radio" name="options" class="periode" id="pendant" autocomplete="off"> Pendant le FIMU
							</label>
							<label class="btn btn-primary">
							<input type="radio" name="options" class="periode" id="apres" autocomplete="off"> Semaine suivante
							</label>
						</div>
						<div class="flex-btn btn-group" data-toggle="buttons">
							<label class="btn btn-primary active table" id="csp">
							<input type="radio" name="options"  autocomplete="off" > CSP
							</label>
							<label class="btn btn-primary table" id="age">
							<input type="radio" name="options"  autocomplete="off"> Âge
							</label>
							<label class="btn btn-primary table" id="origine">
							<input type="radio" name="options"  autocomplete="off"> Origine
							</label>
						</div>
					</div>
						
					
					<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<div id="Nuitee2017"></div>
						<div class="btn-group" data-toggle="buttons">
							<label class="btn btn-primary active">
							<input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1
							</label>
							<label class="btn btn-primary">
							<input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
							</label>
							<label class="btn btn-primary">
							<input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
							</label>
						</div>
						
					</div >
					</div>
					<div class="para col-xs-12 col-sm-6 col-md-3 col-lg-3">
						<p>25%</p>
						<p>de participation</p>
					</div>
					<div class="para col-xs-12 col-sm-6 col-md-3 col-lg-3">
						<p>25%</p>
						<p>de participation</p>
					</div>
					<div class="para col-xs-12 col-sm-6 col-md-3 col-lg-3">
						<p>25%</p>
						<p>de participation</p>
					</div>
					<div class="para col-xs-12 col-sm-6 col-md-3 col-lg-3">
						<p>25%</p>
						<p>de participation</p>
					</div>
				
			</div>
	   </div>
	   
	   <!-- /////////////////////////////////////////////////////////-->
	   
	   <div class="container-fluid" id="bloc2">
			<div class="container">
				<div class="row text-center">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h2>CATEGORIE</h2>
					</div>
					<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<div id="pieChart"></div>
						<div class="btn-group" data-toggle="buttons">
							<label class="btn btn-primary active">
							<input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1
							</label>
							<label class="btn btn-primary">
							<input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
							</label>
							<label class="btn btn-primary">
							<input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
							</label>
						</div>
					</div>
					<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<h3>GRAPHIQUE 2017</h3>
						<div class="btn-group" data-toggle="buttons">
							<label class="btn btn-primary active">
							<input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1
							</label>
							<label class="btn btn-primary">
							<input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
							</label>
							<label class="btn btn-primary">
							<input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
							</label>
						</div>
						
					</div >
					<div class="para col-xs-12 col-sm-6 col-md-3 col-lg-3">
						<p>25%</p>
						<p>de participation</p>
					</div>
					<div class="para col-xs-12 col-sm-6 col-md-3 col-lg-3">
						<p>25%</p>
						<p>de participation</p>
					</div>
					<div class="para col-xs-12 col-sm-6 col-md-3 col-lg-3">
						<p>25%</p>
						<p>de participation</p>
					</div>
					<div class="para col-xs-12 col-sm-6 col-md-3 col-lg-3">
						<p>25%</p>
						<p>de participation</p>
					</div>
				</div>
			</div>
	   </div>
	   
	   <!-- /////////////////////////////////////////////////////////-->
	   
	   <div class="container-fluid" id="bloc3">
			<div class="container">
				<div class="row text-center">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h2>CATEGORIE</h2>
					</div>
					<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<h3>GRAPHIQUE 2016</h3>
						
						<div class="btn-group" data-toggle="buttons">
							<label class="btn btn-primary active">
							<input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1
							</label>
							<label class="btn btn-primary">
							<input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
							</label>
							<label class="btn btn-primary">
							<input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
							</label>
						</div>
						<div class="btn-group" data-toggle="buttons">
							<label class="btn btn-primary active">
							<input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1
							</label>
							<label class="btn btn-primary">
							<input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
							</label>
							<label class="btn btn-primary">
							<input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
							</label>
						</div>
					</div>
					<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<h3>GRAPHIQUE 2017</h3>
						<div class="btn-group" data-toggle="buttons">
							<label class="btn btn-primary active">
							<input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1
							</label>
							<label class="btn btn-primary">
							<input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
							</label>
							<label class="btn btn-primary">
							<input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
							</label>
						</div>
						
					</div >
					<div class="para col-xs-12 col-sm-6 col-md-3 col-lg-3">
						<p>25%</p>
						<p>de participation</p>
					</div>
					<div class="para col-xs-12 col-sm-6 col-md-3 col-lg-3">
						<p>25%</p>
						<p>de participation</p>
					</div>
					<div class="para col-xs-12 col-sm-6 col-md-3 col-lg-3">
						<p>25%</p>
						<p>de participation</p>
					</div>
					<div class="para col-xs-12 col-sm-6 col-md-3 col-lg-3">
						<p>25%</p>
						<p>de participation</p>
					</div>
				</div>
			</div>
	   </div>
		

   	
   </main> 
    <footer class="text-center">
   	<p>Crédits : Yohann Thorez / Charlie Moreau / Kevin Villard / Mourad Zouabi / Luc Ratelli</p>
   </footer> 
    
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/d3.min.js"></script>
    <script src="assets/js/d3pie.min.js"></script>
    <script src="assets/js/app.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
</body>
</html>

