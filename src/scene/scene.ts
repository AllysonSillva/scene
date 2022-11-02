import {
  Scene,
  AxesHelper,
  AmbientLight,
  DirectionalLight,
  Mesh,
  SphereGeometry,
  BoxGeometry,
  ConeGeometry,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
} from "three"
import { updateRenderer } from "/src/core/renderer.ts"

import { gui } from "/src/core/gui.ts"

export const scene = new Scene()

// Axes Helper
const axesHelper = new AxesHelper(0.5)
scene.add(axesHelper)

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
})

const ambientLight = new AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new DirectionalLight("#ffffff", 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

scene.add(directionalLight)

const PARAMS = {
  color: "#5EDCAE",
}

const sphere = new Mesh(
  new SphereGeometry(1, 32, 32),
  new MeshToonMaterial({
    color: new Color("#dc905e"),
    wireframe: false,
  })
)

sphere.position.set(0, 7, -0.3)
sphere.castShadow = true

const sphere1 = new Mesh(
  new SphereGeometry(0.2, 32, 32),
  new MeshToonMaterial({
    color: new Color("#000000"),
    wireframe: false,
  })
)

sphere1.position.set(0.5, 7.2, 0.5)
sphere1.castShadow = true

const sphere2 = new Mesh(
  new SphereGeometry(0.2, 32, 32),
  new MeshToonMaterial({
    color: new Color("#000000"),
    wireframe: false,
  })
)

sphere2.position.set(-0.5, 7.2, 0.5)
sphere2.castShadow = true

const cone = new Mesh(
  new ConeGeometry(1.3, 2, 16),
  new MeshToonMaterial({
    color: new Color("#ffffff"),
    wireframe: false,
  })
)

cone.position.set(0, 8.5, -0.3)
cone.castShadow = true


const boxGe = new Mesh(
  new BoxGeometry(1, 0.5 ,1.5),
  new MeshToonMaterial({
    color: new Color("#000000"),
    wireframe: false,
  })
)

boxGe.position.set(1, 0.2, 0)
boxGe.castShadow = true

const boxGe1 = new Mesh(
  new BoxGeometry(1, 0.5 ,1.5),
  new MeshToonMaterial({
    color: new Color("#000000"),
    wireframe: false,
  })
)

boxGe1.position.set(-1, 0.2, 0)
boxGe1.castShadow = true

const boxGe2 = new Mesh(
  new BoxGeometry(0.5, 2 ,0.5),
  new MeshToonMaterial({
    color: new Color("#d5975c"),
    wireframe: false,
  })
)

boxGe2.position.set(-1, 1.5, -0.3)
boxGe2.castShadow = true

const boxGe3 = new Mesh(
  new BoxGeometry(0.5, 2 ,0.5),
  new MeshToonMaterial({
    color: new Color("#d5975c"),
    wireframe: false,
  })
)

boxGe3.position.set(1, 1.5, -0.3)
boxGe3.castShadow = true

const boxGe4 = new Mesh(
  new BoxGeometry(3, 3 ,1),
  new MeshToonMaterial({
    color: new Color("#0d00a2"),
    wireframe: false,
  })
)

boxGe4.position.set(0, 4, -0.3)
boxGe4.castShadow = true

const boxGe5 = new Mesh(
  new BoxGeometry(1, 1 ,1),
  new MeshToonMaterial({
    color: new Color("#d5975c"),
    wireframe: false,
  })
)

boxGe5.position.set(0, 6, -0.3)
boxGe5.castShadow = true

const boxGe6 = new Mesh(
  new BoxGeometry(0.6, 0.6 ,4),
  new MeshToonMaterial({
    color: new Color("#d5975c"),
    wireframe: false,
  })
)

boxGe6.position.set(1.8, 5, 1)
boxGe6.castShadow = true

const boxGe7 = new Mesh(
  new BoxGeometry(0.6, 0.6 ,4),
  new MeshToonMaterial({
    color: new Color("#dc905e"),
    wireframe: false,
  })
)

boxGe7.position.set(-1.8, 5, 1)
boxGe7.castShadow = true

const boxGe8 = new Mesh(
  new BoxGeometry(1, 0.2 ,0.2),
  new MeshToonMaterial({
    color: new Color("#ff0004"),
    wireframe: false,
  })
)

boxGe8.position.set(0, 6.6, 0.6)
boxGe8.castShadow = true

const sphereCtrls = gui.addFolder({
  title: "Sphere",
})

sphereCtrls.addInput(sphere.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(sphere.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(sphere.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(PARAMS, "color").on("change", (e: { value: ColorRepresentation | undefined }) => {
  sphere.material.color = new Color(e.value)
})

sphereCtrls.addInput(sphere.material, "wireframe")

scene.add(sphere)
scene.add(sphere1)
scene.add(sphere2)
scene.add(boxGe)
scene.add(boxGe1)
scene.add(boxGe2)
scene.add(boxGe3)
scene.add(boxGe4)
scene.add(boxGe5)
scene.add(cone)
scene.add(boxGe6)
scene.add(boxGe7)
scene.add(boxGe8)



const plane = new Mesh(
  new PlaneGeometry(10, 10, 10, 10),
  new MeshToonMaterial({
    color: new Color("#444"),
  })
)

plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane)

export function updateScene() {
  updateRenderer()
}
