#!/bin/bash
# NOTE: protoc is required
# NOTE: the python module `grpc_tools` is required

# source .venv/bin/activate

FOLDER=$(pwd)
I=$(PWD)/proto
DEST=$(PWD)/src/evmosproto/
mkdir -p $DEST

# python -m grpc_tools.protoc -I=$I --python_out=$DEST --grpc_python_out=$DEST $(find $(PWD)/proto -iname "*.proto")
grpc_tools_node_protoc --proto_path=$I --js_out=import_style=commonjs,binary:$DEST --grpc_out=generate_package_definition:$DEST $(find $(PWD)/proto -iname "*.proto")

# # Fix imports
# find $DEST -type f -a \( -name "*.py" \) -a -exec sed -i '' -e s/"from "/"from evmosproto."/g {} +


# # Undo import fix for the google libs
# find $DEST -type f -a \( -name "*.py" \) -a -exec sed -i '' -e s/"from evmosproto.google.protobuf import descriptor as _descriptor"/"from google.protobuf import descriptor as _descriptor"/g {} +
# find $DEST -type f -a \( -name "*.py" \) -a -exec sed -i '' -e s/"from evmosproto.google.protobuf import message as _message"/"from google.protobuf import message as _message"/g {} +
# find $DEST -type f -a \( -name "*.py" \) -a -exec sed -i '' -e s/"from evmosproto.google.protobuf import reflection as _reflection"/"from google.protobuf import reflection as _reflection"/g {} +
# find $DEST -type f -a \( -name "*.py" \) -a -exec sed -i '' -e s/"from evmosproto.google.protobuf import symbol_database as _symbol_database"/"from google.protobuf import symbol_database as _symbol_database"/g {} +
# find $DEST -type f -a \( -name "*.py" \) -a -exec sed -i '' -e s/"from evmosproto.google.protobuf.internal import enum_type_wrapper"/"from google.protobuf.internal import enum_type_wrapper"/g {} +
# find $DEST -type f -a \( -name "*.py" \) -a -exec sed -i '' -e s/"from evmosproto.google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2"/"from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2"/g {} +
# find $DEST -type f -a \( -name "*.py" \) -a -exec sed -i '' -e s/"from evmosproto.google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2"/"from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2"/g {} +


# create() {
#     for DIR in $(find $1 -type d); do
#         touch $DIR/__init__.py
#     done
# }

# create $DEST
