FROM debian

RUN apt update
RUN apt install git nodejs -y

COPY . /src

WORKDIR /src

RUN git config --global credential.helper 'store --file ~/.my-credentials'

COPY .cred ~/.my-credentials

ENTRYPOINT [ "node", "." ]