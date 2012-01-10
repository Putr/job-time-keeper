<html lang="en">
    <head>
		<meta charset="utf-8">
		<title>Job Time Keeper</title>
		<!--<link rel="stylesheet" href="http://twitter.github.com/bootstrap/1.4.0/bootstrap.min.css">-->
	<?php echo $view['css']?>
	<body>

		<div class="container">

			<div class="content">
				
				<div class="page-header">
					<h1>Job Time Keeper <small>Little script to help you keep time @ work!</small></h1>
				</div>
				
				<div class="row how-to">
					<div class="span10">
						<p>This is where the tutorial will go!</p>
					</div>
				</div>
				
				<div class="row">
					<div class="span12">
						<h2>Your time table</h2>
						
						<table id="time-table">
							
							<thead>
								<tr>
									<th>Ticket</th>
									<th>Time Span</th>
									<th>Comment</th>
									<th>Time Difference</th>
								</tr>
							</thead>
							
							<tbody>
								<tr id="input-row">
									<td colspan="4" class="input-line"><input class="span16 time-input" id="time-input" name="" type="text" placeholder="17:00 18:00 #312 Some comment" /></td>
								</tr>
							</tbody>
						</table>
						
						
					</div>
					<div id="big-counter-holder" class="span2">
						<p id="counter-text">Total Hours</p>
						<span id="big-counter">0</span>
					</div>
				</div>
				
				
			</div>

			<footer>
				<p>:)</p>
			</footer>

		</div> <!-- /container -->
    </body>
    <?php echo $view['js']?>
</html>