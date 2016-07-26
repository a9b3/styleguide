# vim: set syntax=yaml:

# Service
apiVersion: v1
kind: Service
metadata:
  name: styleguide
  labels:
    run: styleguide
    subdomain: accounts
spec:
  type: NodePort
  ports:
  - port: 80 # port to serve service on
    targetPort: 80 # containers port
    protocol: TCP
  selector:
    app: styleguide
  # sessionAffinity: ClientIP

---

# Deployment
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: styleguide
spec:
  replicas: 1
  # pod definition
  template:
    metadata:
      labels:
        app: styleguide
    spec:
      containers:
      - name: styleguide
        image: {{IMAGE_NAME}}
        ports:
        - containerPort: 80
