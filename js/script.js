var qs = function(sel) {
	return document.querySelector(sel)
}

var projectToHtml = function(project) {
	var outputHtml = '<div class="project">'
	outputHtml += '<p class="appName">' + project.app + '</p>'
	outputHtml += '<p class="student">by ' + project.name + '</p>'
	outputHtml += '<p class="cohort"><strong>cohort:</strong> ' + project.cohort + '</p>'
	outputHtml += '<p class="description"><strong>description:</strong>' + project.descr + '</p>'
	outputHtml += '<a href="' + project.url + '">[app url]</a>'
	outputHtml += '<a href="' + project.src + '">[src]</a>'
	outputHtml += '</div>'
	return outputHtml
}

var htmlString = ''

projects.forEach(function(project) {
	htmlString += projectToHtml(project)
})

qs('#container').innerHTML = htmlString