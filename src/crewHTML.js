function crewHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Assemble Your Crew</title>
    </head>
    <body>
    <section class="hero is-primary">
        <div class="hero-body">
            <p class="title">
                The Crew
            </p>
        </div>
    </section>
    <section class="container">
        <div class="funk">
            ${assembleCrew(data)}
        </div>
    </section>
    </body>
    </html>`;
};

function assembleCrew(array) {
    let crew = array.map(function(employee) {
        if (employee.getRole() === 'Manager') {
            return `
                <div class="employee-info">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-header">
                                <div class="header-sub">
                                    <p>${employee.getName()}</p>
                                    <p>Manager</p>
                                    <div class="footer">
                                        <p class="little-foot">${employee.getId()}</p>
                                        <p class="little-foot"><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                                        <p class="little-foot">Office #: ${employee.getOfficeNumber()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (employee.getRole() === 'Engineer') {
            return `
                <div class="employee-info">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-header">
                                <div class="header-sub">
                                    <p>${employee.getName()}</p>
                                    <p>Engineer</p>
                                    <div class="footer">
                                        <p class="little-foot">${employee.getId()}</p>
                                        <p class="little-foot"><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                                        <p class="little-foot">GitHub:	%20<a href="https://www.github.com/${employee.getGithub()}">${employee.getGithub()}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="employee-info">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-header">
                                <div class="header-sub">
                                    <p>${employee.getName()}</p>
                                    <p>Intern</p>
                                    <div class="footer">
                                        <p class="little-foot">${employee.getId()}</p>
                                        <p class="little-foot"><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                                        <p class="little-foot">${employee.getSchool()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }).join(''); // Use .join('') to convert the array of strings to a single string
    return crew;
}

module.exports = crewHTML;
