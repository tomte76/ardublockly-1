FROM ubuntu:18.04

ENV DEBIAN_FRONTEND=noninteractive

RUN rm -f /etc/localtime; ln -s /usr/share/zoneinfo/Europe/Berlin /etc/localtime
RUN apt-get update && apt-get -y dist-upgrade
RUN apt-get -y --force-yes install curl gnupg lsb-release
RUN apt-get -y --force-yes install procps less telnet git vim

# NodeJS
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get -y --force-yes install nodejs build-essential

# Ardublocky Dependencies
RUN apt-get -y --force-yes install python3-setuptools python3-dev python3-tk python3 python3-pip
RUN pip3 install requests --upgrade
RUN pip3 install coverage
RUN pip3 install mkdocs
RUN pip3 install pyinstaller
RUN pip3 freeze
RUN pyinstaller --version

# Add Build-User
RUN adduser --gecos 'Ardublockly Build' --disabled-password build

# Trigger small rebuild
RUN echo "20190428003" > /etc/version-ardublocky-image

# Ardublocky GIT & Build
RUN su - build -c "git clone https://github.com/tomte76/ardublockly-1.git"
# if building a branch check it out here
RUN su - build -c "cd ardublockly-1 && git checkout master"
RUN su - build -c "cd ardublockly-1 && git submodule update --init --recursive"
RUN su - build -c "mkdir -p ardublockly-1/docs/"
RUN su - build -c "cd ardublockly-1/blockly && python build.py"
RUN su - build -c "cd ardublockly-1 && python3 package/build_docs.py"
RUN su - build -c "cd ardublockly-1 && python3 package/build_pyinstaller.py linux"
RUN su - build -c "cd ardublockly-1/package/electron && npm install"
RUN su - build -c "cd ardublockly-1/package/electron && npm run release"
RUN su - build -c "cd ardublockly-1 && python3 package/pack_ardublockly.py"

ADD files/init.sh /sbin/init.sh

CMD [ "/sbin/init.sh" ]
