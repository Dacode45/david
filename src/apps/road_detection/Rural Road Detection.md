# Notes from [Rural Road Detection of Color Image in Complicated Environment](http://www.sersc.org/journals/IJSIP/vol6_no6/15.pdf)

## Abstract
- Using imporved **[FCM (Fuzzy C-Means)](#FCM)** and **[Hough transformation]
(#hough-transformation)**.
- Not influenced by shadow, water vestige, rainy days or other environmental factors.
1. Transformed RGB space into [HIS](#his) space.
2. Initial cluster center is determined using a [climbing method](#climbing-method) for image saturation **histogram peak**.
3. The road area is detected using improved [FCM](#FCM)
4. After [morphological image processing]() the road boundary is detected using Hough transformation.

## Introduction
1. Image Space Transformation. 
  Detect road based off the Intensity of (HIS).
2. FCM road Segmentation
  2.1 Fuzzy C-Means Algo
  - <a name="climbing-method"> Compare the current point with surrounding neighborhood point, if current point is the largest, return the current point as the histogram peak.
  Satisfys P = (i, H(i) > H(i-1) & H(i) > H(i+1))
  Where P is the peak, i = 0...255, H(i) is the histogram of saturation? (__probably means intensity but paper says saturation__).
  To prevent trapping (ain't never gonna stop trapping boi), pixel distance of extreme value should be greater than a certain threshold and the corresponding pixels should be more than a certain number. Road images can be divided into road region and road area, so we take two extrme value points.
  - C-Means
  1. Determine the cluster number c, the largest number of iterations T, iterative error e > 0, the inital cluster venter v(i = c), t=1..T
  2. Given d = |x - v| if d = 0, u = 1
  ...
  2.2 Improved Fuzzy C-Means
  **Problem:** Traditional FCM always recalculates cluster center and membership function every iteration process. Also Rural roads have environmental factors that make it difficult to determine the initial cluster center.
  **Solution:** In the saturation channel, the area of gray which has big changes indicates road boundaries, while the road area has a similar gray level. Each pixel can be replaced by the average gray values in the road area. This essentially eliminates environmental factors.
  1. Saturation image is divided into N areas with the same size and FCM cluster is based on the average grey value of each area.
  2. Finding the area with the biggest gray change is done by calculating area roughness Cn and average roughness C. __See paper for equation__ 
  I the area grey value satisfies Cn >= a * C, we think that the area is a road boundary and background area. According to threshold array, the area is divided into M areas.
  3. the N+M-1 areas are calculated wiht FCM until done.
3. Road Boundary Detection
  3.1 Morpholocial Processing of Images
  3.2 Road detection based on Hough Transform.
  They just did it.

##



# Index
- <a name="bary-center></a>Bary Center
  [Wikipedia](https://en.wikipedia.org/wiki/Barycenter)
  It is the center of mass of two or more bodies orbiting each other. It is the point at which they both orbit eachother.
  __It is one of the foci of the elliptical orbit of each body__
- <a name="FCM"></a>FCM (Fuzzy C-Means)
 [Video](https://www.youtube.com/watch?v=9yNtJsFxDQI)
 **Fuzzy** means predicates have a degree of applicability rather than a yes or no
 **Fuzzy logic** is logic on fuzzy sets.
 **Fuzzy sets** have a potentially infinite range of truth values between one and zero
 **Fuzzy clustering** non-unique partitioning of data in a collection of clusters.

 Introduced by Bezdek. Add a Fuzzification Parameter (M) in the range [1, N] whcih determines the degree of fuzziness in the clusters. when M = 1 the effect is a crisp clustering of points. when M > 1 is the degree of fuzziness among points in the decision space increases. 

 1. Initialize cluster centers.
 2. Get the distances to each cluster center.
 3. Create a membership matrix (row: datum, col: cluster) that takes the inverse distances to clusters, make this a fuzzy measurment by raising the inverse distance to the inverse of the fuzzy parameter. Normalize this value so that the sum of all rows in the matrix is one.
 4. Generate a new centroid for each cluster

- <a name="his"></a>HIS - Hue intensity saturation

- <a name="K-means"></a>K-means
  Simple way to classify a dataset through a certainnumber of clusters (k clusters).
  ### Algorithm
  Divided into stages: **Early Group Age** **Recurance** 
  - Early Group Age
    1. Define k centroids (one for each custers) placed as far away as possible from each other. 
    (different locations cause different results)
    2. Take each point in dataset and associate it to the nearest centroid. 
  - **Recurrance**
    1. Recalculate k new centroids as [bary centers](#bary-center) of the cluster resulting from the previous step. 
    2. Repeat 1. until the new centroids generated are not very different from the previous.

- <a name="hough-transformation">Hough Transformation
  Find aligned points in images that look like they would be on the curve or boundary of a line [Video](https://www.youtube.com/watch?v=uDB2qGqnQ1g)

  A line has two parameters (m: slope, b: slope intercept). Given a point (x, y), the lines that could pass through satisfy y = mx + b (image space) or b= -xm + y (parameter space)
  **Parameter Space dimensions(m, b)** If two points are on some line y=m'x + b'. Then in parameter space (m', b') is a point on both the lines b= -x2m + y2 and b = -x1m + y1

  Initial Algorithm. 
  1. Initialize an accumulater matrix A(m, b)
  2. For each edge element (x,y) increment all cells that satisfy b=-x m+y
  3. Local maxima in A(m,b) corresponds to lines
  Won't work with vertical lines as m goes to infinity. So we use polar coordinates.
  p = xcos(theta) - ysin(theta) __No more infintie slope__
  Accumulator matrix is now one of A(p, theta) and parameter space is no a sinusoidal curve
  Special Considerations
  - Angle range is -90 to +89 where origin is top left (x increases right, y increases down)
  - Rho range is -Dmax to Dmax, Where dmax is the largest possible distance.

