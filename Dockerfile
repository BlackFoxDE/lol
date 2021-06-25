FROM debian

RUN apt update
RUN apt install git nodejs curl -y

COPY . /src

WORKDIR /src

RUN git config --global user.email "you@example.com"
RUN git config --global user.name "BlackFoxDE"

ENTRYPOINT [ "node", "." ]
