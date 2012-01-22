<html lang="en">
    <head>
		<meta charset="utf-8">
		<title>Job Time Keeper</title>
		<!--<link rel="stylesheet" href="http://twitter.github.com/bootstrap/1.4.0/bootstrap.min.css">-->
		<?php echo $view['css'] ?>
		<script src="/js/lib/head.load.min.js"></script>
	
		<script>
			head.js(<?php echo $view['js'] ?>);
		</script>
	<body>

		<div class="container">

			<div class="content">

				<div class="page-header">
					<h1>Job Time Keeper <small>Little script to help you keep time @ work!</small></h1>
				</div>

				<ul class="tabs" data-tabs="tabs">
					<li class="active"><a href="#input-page">Todays table</a></li>
					<li><a href="#previous-page">Old tables</a></li>
					<li><a href="#how-to-page">How to</a></li>
					<li><a href="#config-page">Config</a></li>
					<li><a href="#about-page">About</a></li>
				</ul>

				<div id="my-tab-content" class="tab-content">

					<div id="input-page" class="tab-pane active">
						<div class="row">
							<div class="span12">
								<h2>Todays table</h2>

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
					
					<div id="previous-page" class="tab-pane">
						<div class="row">
							<div class="span12">
								<h2>Previous tables</h2>
								<p>Here you'll find tables from previous days grouped by day.</p>
							</div>
							
							<div class="row">
								<div class="span12 oldTablesAccordian">
									Table
								</div>
							</div>
						</div>
					</div>
					
					<div id="how-to-page" class="tab-pane">
						<div class="row">
							<div class="span12">
								<h2>How to page</h2>
							</div>
						</div>
					</div>

					<div id="config-page" class="tab-pane">
						<div class="row">
							<div class="span12">
								<h2>Configuration</h2>
							</div>
							
							<div class="clearfix">
								<label for="ignoretags">Ignore tags</label>
								<div class="input">
									<input type="text" size="30" name="ignoretags" id="ignoretags" class="span10 config-input" value="#lunch, #break">
									<span class="help-block">Comma delimirated list of tags that if present do not count as billable hours.</span>
								</div>
							</div>
							
							<div class="clearfix">
								<label for="vcsurl">Tag link url</label>
								<div class="input">
									<input type="text" size="30" name="vcsurl" id="vcsurl" class="span10 config-input" placeholder="http://trac.example.com/example/ticket/%id%">
									<span class="help-block">Url to link your tags to. ID of tag (without #) replaces %id%</span>
								</div>
							</div>

							<div class="clearfix">
								<label for="totaltime">Billable hours per day</label>
								<div class="input">
									<input type="number" min="0.25" max="24" step="0.25" name="totaltime" id="totaltime" class="span2 config-input" value="8">
									<span class="help-block">Total workday billable hours. 15 minute (0.25) accuracy.</span>
								</div>
							</div>
							
							<div class="clearfix">
								<label for="savelog">Locally save previous data</label>
								<div class="input">
									<input type="checkbox" value="checked" name="savelog" id="savelog" class="config-input">
									<span class="help-block">Do you wish us to save you're previous days data in you're browser (nothing goes to the server).</span>
								</div>
							</div>
							
						</div>
					</div>

					<div id="about-page" class="tab-pane">
						<div class="row">
							<div class="span12">
								<h2>About</h2>
							</div>
						</div>
					</div>

				</div>
			</div>

			<footer>
				<p>:)</p>
			</footer>

		</div> <!-- /container -->
    </body>
	
</html>