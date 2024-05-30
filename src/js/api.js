
//bruker denne
/*

const usersList = document.querySelector("ul");
const loadMoreButton = document.querySelector(".load-more-button");
let page = 1;

const fetchUsers = async () => {
  try {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const data = await response.json();
    console.log(data.data);
    renderUsers(data.data);
  } catch (error) {
    console.log(error);
  }
};

const loadMoreUsers = async () => {
  if (page >= 2) {
    loadMoreButton.setAttribute('disabled', 'true');
    return;
  } else {
    page++;
    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data = await response.json();
      renderUsers(data.data);
    } catch (error) {
      console.log(error);
    }
  }
};

const renderUsers = (users) => {
  users.forEach((user) => {
    const li = document.createElement("li");
    const id = document.createElement("span");
    const firstname = document.createElement("span");
    const lastname = document.createElement("span");
    const email = document.createElement("span");
    const avatarContainer = document.createElement("span");
    const avatar = document.createElement("img");

    usersList.append(li);
    li.append(id, firstname, lastname, email, avatarContainer);
    avatarContainer.append(avatar);

    li.classList.add("createdLi");
    id.classList.add("userID");
    firstname.classList.add("userFirstname");
    lastname.classList.add("userLastname");
    email.classList.add("userEmail");
    avatarContainer.classList.add("userAvatarContainer");
    avatar.classList.add("userImage");

    id.textContent = user.id;
    firstname.textContent = user.first_name;
    lastname.textContent = user.last_name;
    email.textContent = user.email;
    avatar.src = user.avatar;
  });
};

loadMoreButton.addEventListener("click", loadMoreUsers);

fetchUsers();

const peopleArray = [];

const sortByNameButton = document.querySelector(".sort-by-name-button");
const sortByHeightButton = document.querySelector(".sort-by-height-button");
const sortByMassButton = document.querySelector(".sort-by-mass-button");
const sortByAllButton = document.querySelector(".sort-by-all-button");
const displayDataContainer = document.querySelector(".display-data-container");

const getData = async () => {
  const response = await fetch("https://reqres.in/api/users?page=2");
  const data = await response.json();
  peopleArray.push(...data);
  renderData(data);
};

getData();

const sortByName = (data) => {
  return data.slice().sort((a, b) => a.name.localeCompare(b.name));
};
const sortByHeight = (data) => {
  return data.slice().sort((a, b) => b.height - a.height);
};
const sortByMass = (data) => {
  return data.slice().sort((a, b) => b.mass - a.mass);
};

sortByNameButton.addEventListener("click", () => {
  const sortedByName = sortByName(peopleArray);
  renderData(sortedByName);
  console.log(sortedByName);
});
sortByHeightButton.addEventListener("click", () => {
  const sortedByHeight = sortByHeight(peopleArray);
  renderData(sortedByHeight);
  console.log(sortedByHeight);
});
sortByMassButton.addEventListener("click", () => {
  const sortedByMass = sortByMass(peopleArray);
  renderData(sortedByMass);
  console.log(sortedByMass);
});
sortByAllButton.addEventListener("click", () => {
  renderData(peopleArray);
});

function renderData(data) {
  displayDataContainer.textContent = "";
  data.forEach((element) => {
    const elementContainer = document.createElement("div");
    const nameContainer = document.createElement("span");
    const heightContainer = document.createElement("span");
    const massContainer = document.createElement("span");

    displayDataContainer.append(elementContainer);
    elementContainer.append(nameContainer, heightContainer, massContainer);

    nameContainer.textContent = element.name;
    heightContainer.textContent = element.height;
    massContainer.textContent = element.mass;

    elementContainer.classList.add("element-container");
  });
}
console.log(peopleArray);*/




fetch('https://reqres.in/api/users?page=2')
 .then(response => response.json())
 .then(data => {
    const users = data.data;
    const tableBody = document.getElementById('api-data-body');

    // Sorting functions
    const sortUsersById = (direction) => {
      users.sort((a, b) => {
        if (direction === 'asc') {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
      renderTable();
    };

    const sortUsersByLastName = (direction) => {
      users.sort((a, b) => {
        if (direction === 'asc') {
          return a.last_name.localeCompare(b.last_name);
        } else {
          return b.last_name.localeCompare(a.last_name);
        }
      });
      renderTable();
    };

    const sortUsersByFirstName = (direction) => {
      users.sort((a, b) => {
        if (direction === 'asc') {
          return a.first_name.localeCompare(b.first_name);
        } else {
          return b.first_name.localeCompare(a.first_name);
        }
      });
      renderTable();
    };

    const sortUsersByEmail = (direction) => {
      users.sort((a, b) => {
        if (direction === 'asc') {
          return a.email.localeCompare(b.email);
        } else {
          return b.email.localeCompare(a.email);
        }
      });
      renderTable();
    };

    // Render table function
    const renderTable = () => {
      tableBody.innerHTML = '';
      users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.email}</td>
          <td>${user.first_name}</td>
          <td>${user.last_name}</td>
          <td><img src="${user.avatar}" alt="${user.first_name} ${user.last_name}" /></td>
        `;
        tableBody.appendChild(row);
      });
    };

    // Add event listeners to the sort buttons
    document.getElementById('sort-id-asc').addEventListener('click', () => {
      sortUsersById('asc');
    });
    document.getElementById('sort-id-desc').addEventListener('click', () => {
      sortUsersById('desc');
    });
    document.getElementById('sort-lastname-asc').addEventListener('click', () => {
      sortUsersByLastName('asc');
    });
    document.getElementById('sort-lastname-desc').addEventListener('click', () => {
      sortUsersByLastName('desc');
    });
    document.getElementById('sort-firstname-asc').addEventListener('click', () => {
      sortUsersByFirstName('asc');
    });
    document.getElementById('sort-firstname-desc').addEventListener('click', () => {
      sortUsersByFirstName('desc');
    });
    document.getElementById('sort-email-asc').addEventListener('click', () => {
      sortUsersByEmail('asc');
    });
    document.getElementById('sort-email-desc').addEventListener('click', () => {
      sortUsersByEmail('desc');
    });

    // Initial render of the table
    renderTable();
  })
 .catch(error => {
    console.error('Error:', error);
  });