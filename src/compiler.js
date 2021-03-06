// Compiler
//
// This module exports a single function
//
//   compile(sourceCodeString, outputType)
//
// The second argument tells the compiler what to return. It must be one of:
//
//   ast        the abstract syntax tree
//   TO BE IMPLEMENTED:
//   analyzed   the semantically analyzed representation
//   optimized  the optimized semantically analyzed representation
//   js         the translation to JavaScript
//   c          the translation to C
//   llvm       the translation to LLVM

import parse from "./parser.js"

export default function compile(source, outputType) {
  outputType = outputType.toLowerCase()
  if (outputType === "ast") {
    return parse(source)
  } /* else if (outputType === "analyzed") {
      return analyze(parse(source))
    } else if (outputType === "optimized") {
      return optimize(analyze(parse(source)))
    } else if (["js", "c", "llvm"].includes(outputType)) {
      return generate(outputType)(optimize(analyze(parse(source))))
    }*/
  else {
    return "Unknown output type"
  }
}
