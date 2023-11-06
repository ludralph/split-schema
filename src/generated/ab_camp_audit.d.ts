import * as runtime from '@prisma/client/runtime/library';
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result
import { 
    AtLeast,
    Extends,
    Has,
    Or,
    GetScalarType, 
    SortOrder, 
    BatchPayload,
    FieldRef,
    False,
    Keys,
    ExcludeUnderscoreKeys,
    Subset, 
    SelectSubset,
    InputJsonValue,
    JsonNullValueInput,
    JsonFilter,
    StringFilter,
    IntFilter,
    StringFieldUpdateOperationsInput,
    IntFieldUpdateOperationsInput,
    JsonWithAggregatesFilter,
    StringWithAggregatesFilter,
    IntWithAggregatesFilter,
    JsonValue,
    PrismaPromise,
    PickEnumerable,
    TypeMap,
    SubsetIntersection,
    True,
    MaybeTupleToUnion,
    GetHavingFields,
    XOR,


 } from "./utils"

export type ab_camp_audit = $Result.DefaultSelection<$ab_camp_auditPayload>


/**
   * Model ab_camp_audit
   */

export type AggregateAb_camp_audit = {
    _count: Ab_camp_auditCountAggregateOutputType | null
    _avg: Ab_camp_auditAvgAggregateOutputType | null
    _sum: Ab_camp_auditSumAggregateOutputType | null
    _min: Ab_camp_auditMinAggregateOutputType | null
    _max: Ab_camp_auditMaxAggregateOutputType | null
  }

  export type Ab_camp_auditAvgAggregateOutputType = {
    id: number | null
  }

  export type Ab_camp_auditSumAggregateOutputType = {
    id: number | null
  }

  export type Ab_camp_auditMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Ab_camp_auditMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Ab_camp_auditCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Ab_camp_auditAvgAggregateInputType = {
    id?: true
  }

  export type Ab_camp_auditSumAggregateInputType = {
    id?: true
  }

  export type Ab_camp_auditMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Ab_camp_auditMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Ab_camp_auditCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Ab_camp_auditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ab_camp_audit to aggregate.
     */
    where?: ab_camp_auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ab_camp_audits to fetch.
     */
    orderBy?: ab_camp_auditOrderByWithRelationInput | ab_camp_auditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ab_camp_auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ab_camp_audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ab_camp_audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ab_camp_audits
    **/
    _count?: true | Ab_camp_auditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ab_camp_auditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ab_camp_auditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ab_camp_auditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ab_camp_auditMaxAggregateInputType
  }

  export type GetAb_camp_auditAggregateType<T extends Ab_camp_auditAggregateArgs> = {
        [P in keyof T & keyof AggregateAb_camp_audit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAb_camp_audit[P]>
      : GetScalarType<T[P], AggregateAb_camp_audit[P]>
  }




  export type ab_camp_auditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ab_camp_auditWhereInput
    orderBy?: ab_camp_auditOrderByWithAggregationInput | ab_camp_auditOrderByWithAggregationInput[]
    by: Ab_camp_auditScalarFieldEnum[] | Ab_camp_auditScalarFieldEnum
    having?: ab_camp_auditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ab_camp_auditCountAggregateInputType | true
    _avg?: Ab_camp_auditAvgAggregateInputType
    _sum?: Ab_camp_auditSumAggregateInputType
    _min?: Ab_camp_auditMinAggregateInputType
    _max?: Ab_camp_auditMaxAggregateInputType
  }

  export type Ab_camp_auditGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Ab_camp_auditCountAggregateOutputType | null
    _avg: Ab_camp_auditAvgAggregateOutputType | null
    _sum: Ab_camp_auditSumAggregateOutputType | null
    _min: Ab_camp_auditMinAggregateOutputType | null
    _max: Ab_camp_auditMaxAggregateOutputType | null
  }

  type GetAb_camp_auditGroupByPayload<T extends ab_camp_auditGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Ab_camp_auditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ab_camp_auditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ab_camp_auditGroupByOutputType[P]>
            : GetScalarType<T[P], Ab_camp_auditGroupByOutputType[P]>
        }
      >
    >


  export type ab_camp_auditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["ab_camp_audit"]>

  export type ab_camp_auditSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $ab_camp_auditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ab_camp_audit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["ab_camp_audit"]>
    composites: {}
  }


  type ab_camp_auditGetPayload<S extends boolean | null | undefined | ab_camp_auditDefaultArgs> = $Result.GetResult<$ab_camp_auditPayload, S>

  type ab_camp_auditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ab_camp_auditFindManyArgs, 'select' | 'include'> & {
      select?: Ab_camp_auditCountAggregateInputType | true
    }

  export interface ab_camp_auditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['ab_camp_audit'], meta: { name: 'ab_camp_audit' } }
    /**
     * Find zero or one Ab_camp_audit that matches the filter.
     * @param {ab_camp_auditFindUniqueArgs} args - Arguments to find a Ab_camp_audit
     * @example
     * // Get one Ab_camp_audit
     * const ab_camp_audit = await prisma.ab_camp_audit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ab_camp_auditFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ab_camp_auditFindUniqueArgs<ExtArgs>>
    ): Prisma__ab_camp_auditClient<$Result.GetResult<$ab_camp_auditPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ab_camp_audit that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ab_camp_auditFindUniqueOrThrowArgs} args - Arguments to find a Ab_camp_audit
     * @example
     * // Get one Ab_camp_audit
     * const ab_camp_audit = await prisma.ab_camp_audit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ab_camp_auditFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_camp_auditFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ab_camp_auditClient<$Result.GetResult<$ab_camp_auditPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ab_camp_audit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_camp_auditFindFirstArgs} args - Arguments to find a Ab_camp_audit
     * @example
     * // Get one Ab_camp_audit
     * const ab_camp_audit = await prisma.ab_camp_audit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ab_camp_auditFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_camp_auditFindFirstArgs<ExtArgs>>
    ): Prisma__ab_camp_auditClient<$Result.GetResult<$ab_camp_auditPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ab_camp_audit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_camp_auditFindFirstOrThrowArgs} args - Arguments to find a Ab_camp_audit
     * @example
     * // Get one Ab_camp_audit
     * const ab_camp_audit = await prisma.ab_camp_audit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ab_camp_auditFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_camp_auditFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ab_camp_auditClient<$Result.GetResult<$ab_camp_auditPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ab_camp_audits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_camp_auditFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ab_camp_audits
     * const ab_camp_audits = await prisma.ab_camp_audit.findMany()
     * 
     * // Get first 10 Ab_camp_audits
     * const ab_camp_audits = await prisma.ab_camp_audit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ab_camp_auditWithIdOnly = await prisma.ab_camp_audit.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ab_camp_auditFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_camp_auditFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$ab_camp_auditPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ab_camp_audit.
     * @param {ab_camp_auditCreateArgs} args - Arguments to create a Ab_camp_audit.
     * @example
     * // Create one Ab_camp_audit
     * const Ab_camp_audit = await prisma.ab_camp_audit.create({
     *   data: {
     *     // ... data to create a Ab_camp_audit
     *   }
     * })
     * 
    **/
    create<T extends ab_camp_auditCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ab_camp_auditCreateArgs<ExtArgs>>
    ): Prisma__ab_camp_auditClient<$Result.GetResult<$ab_camp_auditPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ab_camp_audits.
     *     @param {ab_camp_auditCreateManyArgs} args - Arguments to create many Ab_camp_audits.
     *     @example
     *     // Create many Ab_camp_audits
     *     const ab_camp_audit = await prisma.ab_camp_audit.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ab_camp_auditCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_camp_auditCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ab_camp_audit.
     * @param {ab_camp_auditDeleteArgs} args - Arguments to delete one Ab_camp_audit.
     * @example
     * // Delete one Ab_camp_audit
     * const Ab_camp_audit = await prisma.ab_camp_audit.delete({
     *   where: {
     *     // ... filter to delete one Ab_camp_audit
     *   }
     * })
     * 
    **/
    delete<T extends ab_camp_auditDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ab_camp_auditDeleteArgs<ExtArgs>>
    ): Prisma__ab_camp_auditClient<$Result.GetResult<$ab_camp_auditPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ab_camp_audit.
     * @param {ab_camp_auditUpdateArgs} args - Arguments to update one Ab_camp_audit.
     * @example
     * // Update one Ab_camp_audit
     * const ab_camp_audit = await prisma.ab_camp_audit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ab_camp_auditUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ab_camp_auditUpdateArgs<ExtArgs>>
    ): Prisma__ab_camp_auditClient<$Result.GetResult<$ab_camp_auditPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ab_camp_audits.
     * @param {ab_camp_auditDeleteManyArgs} args - Arguments to filter Ab_camp_audits to delete.
     * @example
     * // Delete a few Ab_camp_audits
     * const { count } = await prisma.ab_camp_audit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ab_camp_auditDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_camp_auditDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ab_camp_audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_camp_auditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ab_camp_audits
     * const ab_camp_audit = await prisma.ab_camp_audit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ab_camp_auditUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ab_camp_auditUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ab_camp_audit.
     * @param {ab_camp_auditUpsertArgs} args - Arguments to update or create a Ab_camp_audit.
     * @example
     * // Update or create a Ab_camp_audit
     * const ab_camp_audit = await prisma.ab_camp_audit.upsert({
     *   create: {
     *     // ... data to create a Ab_camp_audit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ab_camp_audit we want to update
     *   }
     * })
    **/
    upsert<T extends ab_camp_auditUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ab_camp_auditUpsertArgs<ExtArgs>>
    ): Prisma__ab_camp_auditClient<$Result.GetResult<$ab_camp_auditPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ab_camp_audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_camp_auditCountArgs} args - Arguments to filter Ab_camp_audits to count.
     * @example
     * // Count the number of Ab_camp_audits
     * const count = await prisma.ab_camp_audit.count({
     *   where: {
     *     // ... the filter for the Ab_camp_audits we want to count
     *   }
     * })
    **/
    count<T extends ab_camp_auditCountArgs>(
      args?: Subset<T, ab_camp_auditCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ab_camp_auditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ab_camp_audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ab_camp_auditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ab_camp_auditAggregateArgs>(args: Subset<T, Ab_camp_auditAggregateArgs>): PrismaPromise<GetAb_camp_auditAggregateType<T>>

    /**
     * Group by Ab_camp_audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_camp_auditGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ab_camp_auditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ab_camp_auditGroupByArgs['orderBy'] }
        : { orderBy?: ab_camp_auditGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ab_camp_auditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAb_camp_auditGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the ab_camp_audit model
   */
  readonly fields: ab_camp_auditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ab_camp_audit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ab_camp_auditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ab_camp_audit model
   */ 
  interface ab_camp_auditFieldRefs {
    readonly id: FieldRef<"ab_camp_audit", 'Int'>
    readonly domain: FieldRef<"ab_camp_audit", 'String'>
    readonly props: FieldRef<"ab_camp_audit", 'Json'>
    readonly groups: FieldRef<"ab_camp_audit", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * ab_camp_audit findUnique
   */
  export type ab_camp_auditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_audit
     */
    select?: ab_camp_auditSelect<ExtArgs> | null
    /**
     * Filter, which ab_camp_audit to fetch.
     */
    where: ab_camp_auditWhereUniqueInput
  }


  /**
   * ab_camp_audit findUniqueOrThrow
   */
  export type ab_camp_auditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_audit
     */
    select?: ab_camp_auditSelect<ExtArgs> | null
    /**
     * Filter, which ab_camp_audit to fetch.
     */
    where: ab_camp_auditWhereUniqueInput
  }


  /**
   * ab_camp_audit findFirst
   */
  export type ab_camp_auditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_audit
     */
    select?: ab_camp_auditSelect<ExtArgs> | null
    /**
     * Filter, which ab_camp_audit to fetch.
     */
    where?: ab_camp_auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ab_camp_audits to fetch.
     */
    orderBy?: ab_camp_auditOrderByWithRelationInput | ab_camp_auditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ab_camp_audits.
     */
    cursor?: ab_camp_auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ab_camp_audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ab_camp_audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ab_camp_audits.
     */
    distinct?: Ab_camp_auditScalarFieldEnum | Ab_camp_auditScalarFieldEnum[]
  }


  /**
   * ab_camp_audit findFirstOrThrow
   */
  export type ab_camp_auditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_audit
     */
    select?: ab_camp_auditSelect<ExtArgs> | null
    /**
     * Filter, which ab_camp_audit to fetch.
     */
    where?: ab_camp_auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ab_camp_audits to fetch.
     */
    orderBy?: ab_camp_auditOrderByWithRelationInput | ab_camp_auditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ab_camp_audits.
     */
    cursor?: ab_camp_auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ab_camp_audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ab_camp_audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ab_camp_audits.
     */
    distinct?: Ab_camp_auditScalarFieldEnum | Ab_camp_auditScalarFieldEnum[]
  }


  /**
   * ab_camp_audit findMany
   */
  export type ab_camp_auditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_audit
     */
    select?: ab_camp_auditSelect<ExtArgs> | null
    /**
     * Filter, which ab_camp_audits to fetch.
     */
    where?: ab_camp_auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ab_camp_audits to fetch.
     */
    orderBy?: ab_camp_auditOrderByWithRelationInput | ab_camp_auditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ab_camp_audits.
     */
    cursor?: ab_camp_auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ab_camp_audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ab_camp_audits.
     */
    skip?: number
    distinct?: Ab_camp_auditScalarFieldEnum | Ab_camp_auditScalarFieldEnum[]
  }


  /**
   * ab_camp_audit create
   */
  export type ab_camp_auditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_audit
     */
    select?: ab_camp_auditSelect<ExtArgs> | null
    /**
     * The data needed to create a ab_camp_audit.
     */
    data: XOR<ab_camp_auditCreateInput, ab_camp_auditUncheckedCreateInput>
  }


  /**
   * ab_camp_audit createMany
   */
  export type ab_camp_auditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ab_camp_audits.
     */
    data: ab_camp_auditCreateManyInput | ab_camp_auditCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ab_camp_audit update
   */
  export type ab_camp_auditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_audit
     */
    select?: ab_camp_auditSelect<ExtArgs> | null
    /**
     * The data needed to update a ab_camp_audit.
     */
    data: XOR<ab_camp_auditUpdateInput, ab_camp_auditUncheckedUpdateInput>
    /**
     * Choose, which ab_camp_audit to update.
     */
    where: ab_camp_auditWhereUniqueInput
  }


  /**
   * ab_camp_audit updateMany
   */
  export type ab_camp_auditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ab_camp_audits.
     */
    data: XOR<ab_camp_auditUpdateManyMutationInput, ab_camp_auditUncheckedUpdateManyInput>
    /**
     * Filter which ab_camp_audits to update
     */
    where?: ab_camp_auditWhereInput
  }


  /**
   * ab_camp_audit upsert
   */
  export type ab_camp_auditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_audit
     */
    select?: ab_camp_auditSelect<ExtArgs> | null
    /**
     * The filter to search for the ab_camp_audit to update in case it exists.
     */
    where: ab_camp_auditWhereUniqueInput
    /**
     * In case the ab_camp_audit found by the `where` argument doesn't exist, create a new ab_camp_audit with this data.
     */
    create: XOR<ab_camp_auditCreateInput, ab_camp_auditUncheckedCreateInput>
    /**
     * In case the ab_camp_audit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ab_camp_auditUpdateInput, ab_camp_auditUncheckedUpdateInput>
  }


  /**
   * ab_camp_audit delete
   */
  export type ab_camp_auditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_audit
     */
    select?: ab_camp_auditSelect<ExtArgs> | null
    /**
     * Filter which ab_camp_audit to delete.
     */
    where: ab_camp_auditWhereUniqueInput
  }


  /**
   * ab_camp_audit deleteMany
   */
  export type ab_camp_auditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ab_camp_audits to delete
     */
    where?: ab_camp_auditWhereInput
  }


  /**
   * ab_camp_audit without action
   */
  export type ab_camp_auditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_audit
     */
    select?: ab_camp_auditSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type ab_camp_auditWhereInput = {
    AND?: ab_camp_auditWhereInput | ab_camp_auditWhereInput[]
    OR?: ab_camp_auditWhereInput[]
    NOT?: ab_camp_auditWhereInput | ab_camp_auditWhereInput[]
    id?: IntFilter<"ab_camp_audit"> | number
    domain?: StringFilter<"ab_camp_audit"> | string
    props?: JsonFilter<"ab_camp_audit">
    groups?: JsonFilter<"ab_camp_audit">
  }

  export type ab_camp_auditOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type ab_camp_auditWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: ab_camp_auditWhereInput | ab_camp_auditWhereInput[]
    OR?: ab_camp_auditWhereInput[]
    NOT?: ab_camp_auditWhereInput | ab_camp_auditWhereInput[]
    props?: JsonFilter<"ab_camp_audit">
    groups?: JsonFilter<"ab_camp_audit">
  }, "id" | "domain">

  export type ab_camp_auditOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: ab_camp_auditCountOrderByAggregateInput
    _avg?: ab_camp_auditAvgOrderByAggregateInput
    _max?: ab_camp_auditMaxOrderByAggregateInput
    _min?: ab_camp_auditMinOrderByAggregateInput
    _sum?: ab_camp_auditSumOrderByAggregateInput
  }

  export type ab_camp_auditScalarWhereWithAggregatesInput = {
    AND?: ab_camp_auditScalarWhereWithAggregatesInput | ab_camp_auditScalarWhereWithAggregatesInput[]
    OR?: ab_camp_auditScalarWhereWithAggregatesInput[]
    NOT?: ab_camp_auditScalarWhereWithAggregatesInput | ab_camp_auditScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ab_camp_audit"> | number
    domain?: StringWithAggregatesFilter<"ab_camp_audit"> | string
    props?: JsonWithAggregatesFilter<"ab_camp_audit">
    groups?: JsonWithAggregatesFilter<"ab_camp_audit">
  }

  export type ab_camp_auditCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_camp_auditUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_camp_auditUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_camp_auditUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_camp_auditCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_camp_auditUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_camp_auditUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_camp_auditCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type ab_camp_auditAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ab_camp_auditMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type ab_camp_auditMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type ab_camp_auditSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ab_camp_auditDefaultArgs instead
     */
    export type ab_camp_auditArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ab_camp_auditDefaultArgs<ExtArgs>

    export const Ab_camp_auditScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Ab_camp_auditScalarFieldEnum = (typeof Ab_camp_auditScalarFieldEnum)[keyof typeof Ab_camp_auditScalarFieldEnum]
    