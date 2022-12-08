<p align="center">
    </br>
    <img width="100" src=".//public/favicon.png" alt="make sense logo">
    </br>
</p>

## 📄 Documentation

You can find out more about our tool from the newly released [documentation][14] - still under 🚧 construction. Let us know what topics we should cover first.

## 🤖 Advanced AI integrations

* [YOLOv5][16] is our most powerful integration yet. Thanks to the use of [yolov5js][17] you can load not only pretreated models from [yolov5js-zoo](18), but above all your own models trained thanks to YOLOv5 and [exported](19) to tfjs format.
* [SSD][8] pretrained on the [COCO dataset][9], which will do some of the work for you in drawing bboxes on photos and  also (in some cases) suggest a label. 
* [PoseNet][11] is a vision model that can be used to estimate the pose of a person in an image or video by estimating where key body joints are.

In the future, we also plan to add, among other things, models that classify photos, detect characteristic features of faces as well as whole faces. The engine that drives our AI functionalities is [TensorFlow.js][10] - JS version of the most popular framework for training neural networks. This choice allows us not only to speed up your work but also to care about the privacy of your data, because unlike with other commercial and open source tools, your photos do not have to be transferred to the server. This time AI comes to your device!

## 💻 Local Setup

```bash
# clone repository
git clone <repository>

# navigate to main dir
cd <repository>

# install dependencies
npm install

# serve with hot reload at localhost:3000
npm start
```
To ensure proper functionality of the application locally, npm `8.x.x` and node.js `v16.x.x` versions are required. More information about this problem is available in the [#16][4].

## 🐳 Docker Setup

```bash
# Build Docker Image
docker build -t <name> -f docker/Dockerfile .

# Run Docker Image as Service
docker run -dit -p 3000:3000 --restart=always --name=<name> <name>

# Get Docker Container Logs
docker logs <name>

# Access <name>: http://localhost:3000/
```

## ⌨️ Keyboard Shortcuts

| Functionality                      | Context  | Mac | Windows / Linux  |
|:-----------------------------------|:--------:|:---:|:----------------:|
| Polygon autocomplete               | Editor   | <kbd>Enter</kbd> | <kbd>Enter</kbd> |
| Cancel polygon drawing             | Editor   | <kbd>Escape</kbd> | <kbd>Escape</kbd> |
| Delete currently selected label    | Editor   | <kbd>Backspace</kbd> | <kbd>Delete</kbd> |
| Load previous image                | Editor   | <kbd>⌥</kbd> + <kbd>Left</kbd> | <kbd>Ctrl</kbd> + <kbd>Left</kbd> |
| Load next image                    | Editor   | <kbd>⌥</kbd> + <kbd>Right</kbd> | <kbd>Ctrl</kbd> + <kbd>Right</kbd> |
| Zoom in                            | Editor   | <kbd>⌥</kbd> + <kbd>+</kbd> | <kbd>Ctrl</kbd> + <kbd>+</kbd> |
| Zoom out                           | Editor   | <kbd>⌥</kbd> + <kbd>-</kbd> | <kbd>Ctrl</kbd> + <kbd>-</kbd> |
| Move image                         | Editor   | <kbd>Up</kbd> / <kbd>Down</kbd> / <kbd>Left</kbd> / <kbd>Right</kbd> | <kbd>Up</kbd> / <kbd>Down</kbd> / <kbd>Left</kbd> / <kbd>Right</kbd> |
| Select Label                       | Editor   | <kbd>⌥</kbd> + <kbd>0-9</kbd> | <kbd>Ctrl</kbd> + <kbd>0-9</kbd> |
| Exit popup                         | Popup    | <kbd>Escape</kbd> | <kbd>Escape</kbd> |

**Table 1.** Supported keyboard shortcuts

## ⬆️ Export Formats

|               | CSV | YOLO | VOC XML | VGG JSON | COCO JSON | PIXEL MASK |
|:-------------:|:---:|:----:|:-------:|:--------:|:---------:|:----------:|
| **Point**     | ✓   | ✗    | ☐       | ☐        | ☐         | ✗          |
| **Line**      | ✓   | ✗    | ✗       | ✗        | ✗         | ✗          |
| **Rect**      | ✓   | ✓    | ✓       | ☐        | ☐         | ✗          |
| **Polygon**   | ☐   | ✗    | ☐       | ✓        | ✓         | ☐          |
| **Label**     | ✓   | ✗    | ✗       | ✗        | ✗         | ✗          |

**Table 2.** The matrix of supported labels export formats, where:
* ✓ - supported format
* ☐ - not yet supported format
* ✗ - format does not make sense for a given label type  

You can find examples of export files along with a description and schema on our [Wiki][7].

## ⬇️ Import Formats

|               | CSV | YOLO | VOC XML | VGG JSON | COCO JSON | PIXEL MASK |
|:-------------:|:---:|:----:|:-------:|:--------:|:---------:|:----------:|
| **Point**     | ☐   | ✗    | ☐       | ☐        | ☐         | ✗          |
| **Line**      | ☐   | ✗    | ✗       | ✗        | ✗         | ✗          |
| **Rect**      | ☐   | ✓    | ✓       | ☐        | ✓         | ✗          |
| **Polygon**   | ☐   | ✗    | ☐       | ☐        | ✓         | ☐          |
| **Label**     | ☐   | ✗    | ✗       | ✗        | ✗         | ✗          |

**Table 3.** The matrix of supported labels import formats
* ✓ - supported format
* ☐ - not yet supported format
* ✗ - format does not make sense for a given label type  

## 🔐 Privacy

We don't store your images, because we don't send them anywhere in the first place.