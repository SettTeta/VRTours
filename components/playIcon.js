import AFRAME from "aframe";

AFRAME.registerComponent('play-icon', {
    schema: {
      size: { type: 'number', default: 1 },
      color: { type: 'color', default: '#ffffff' }
    },
  
    init: function () {
      var size = this.data.size;
      var color = this.data.color;
  
      var icon = document.createElement('a-entity');
      icon.setAttribute('geometry', {
        primitive: 'triangle',
        vertexA: { x: 0, y: size / 2, z: 0 },
        vertexB: { x: -size / 2, y: -size / 2, z: 0 },
        vertexC: { x: size / 2, y: -size / 2, z: 0 }
      });
      icon.setAttribute('material', { color: color });
      icon.setAttribute('position', { x: 0, y: 0, z: 0 });
  
      this.el.appendChild(icon);
    }
  });
  