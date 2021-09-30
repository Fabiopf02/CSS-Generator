import { keyframes, groups } from './keyframes.js';

function addGroupsForOptions(select) {
  groups.map((group) => {
    const optGroup = document.createElement("optgroup");
    optGroup.label = transformKey(group);
    optGroup.id = group;
    select.appendChild(optGroup);
  });
}

function transformKey(key) {
  key = key.split("_").join(" ");
	return key.charAt(0).toUpperCase() + key.substr(1);
}

export function addOptions() {
  const select = document.getElementById("animation");
  addGroupsForOptions(select);
  Object.keys(keyframes).forEach((opt) => {
    const option = document.createElement("option");
    const optGroup = document.getElementById(groups[keyframes[opt][0]]);

    option.value = opt;
    option.innerText = transformKey(opt);
    if (opt == "none") {
      option.selected = true;
    }
    if (optGroup)
      optGroup.appendChild(option);
    else
      select.appendChild(option)
  });
}