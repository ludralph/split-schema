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
    TypeMap,
    StringFieldUpdateOperationsInput,
    IntFieldUpdateOperationsInput,
    JsonWithAggregatesFilter,
    StringWithAggregatesFilter,
    IntWithAggregatesFilter,
    JsonValue,
    PrismaPromise,
    PickEnumerable,
    SubsetIntersection,
    True,
    MaybeTupleToUnion,
    GetHavingFields,
    XOR,


 } from "./utils"

export type ab_camp_user = $Result.DefaultSelection<$ab_camp_userPayload>


/**
   * Model ab_camp_user
   */

export type AggregateAb_camp_user = {
    _count: Ab_camp_userCountAggregateOutputType | null
    _avg: Ab_camp_userAvgAggregateOutputType | null
    _sum: Ab_camp_userSumAggregateOutputType | null
    _min: Ab_camp_userMinAggregateOutputType | null
    _max: Ab_camp_userMaxAggregateOutputType | null
  }

  export type Ab_camp_userAvgAggregateOutputType = {
    id: number | null
  }

  export type Ab_camp_userSumAggregateOutputType = {
    id: number | null
  }

  export type Ab_camp_userMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Ab_camp_userMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Ab_camp_userCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Ab_camp_userAvgAggregateInputType = {
    id?: true
  }

  export type Ab_camp_userSumAggregateInputType = {
    id?: true
  }

  export type Ab_camp_userMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Ab_camp_userMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Ab_camp_userCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Ab_camp_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ab_camp_user to aggregate.
     */
    where?: ab_camp_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ab_camp_users to fetch.
     */
    orderBy?: ab_camp_userOrderByWithRelationInput | ab_camp_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ab_camp_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ab_camp_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ab_camp_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ab_camp_users
    **/
    _count?: true | Ab_camp_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ab_camp_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ab_camp_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ab_camp_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ab_camp_userMaxAggregateInputType
  }

  export type GetAb_camp_userAggregateType<T extends Ab_camp_userAggregateArgs> = {
        [P in keyof T & keyof AggregateAb_camp_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAb_camp_user[P]>
      : GetScalarType<T[P], AggregateAb_camp_user[P]>
  }




  export type ab_camp_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ab_camp_userWhereInput
    orderBy?: ab_camp_userOrderByWithAggregationInput | ab_camp_userOrderByWithAggregationInput[]
    by: Ab_camp_userScalarFieldEnum[] | Ab_camp_userScalarFieldEnum
    having?: ab_camp_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ab_camp_userCountAggregateInputType | true
    _avg?: Ab_camp_userAvgAggregateInputType
    _sum?: Ab_camp_userSumAggregateInputType
    _min?: Ab_camp_userMinAggregateInputType
    _max?: Ab_camp_userMaxAggregateInputType
  }

  export type Ab_camp_userGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Ab_camp_userCountAggregateOutputType | null
    _avg: Ab_camp_userAvgAggregateOutputType | null
    _sum: Ab_camp_userSumAggregateOutputType | null
    _min: Ab_camp_userMinAggregateOutputType | null
    _max: Ab_camp_userMaxAggregateOutputType | null
  }

  type GetAb_camp_userGroupByPayload<T extends ab_camp_userGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Ab_camp_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ab_camp_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ab_camp_userGroupByOutputType[P]>
            : GetScalarType<T[P], Ab_camp_userGroupByOutputType[P]>
        }
      >
    >


  export type ab_camp_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["ab_camp_user"]>

  export type ab_camp_userSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $ab_camp_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ab_camp_user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["ab_camp_user"]>
    composites: {}
  }


  type ab_camp_userGetPayload<S extends boolean | null | undefined | ab_camp_userDefaultArgs> = $Result.GetResult<$ab_camp_userPayload, S>

  type ab_camp_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ab_camp_userFindManyArgs, 'select' | 'include'> & {
      select?: Ab_camp_userCountAggregateInputType | true
    }

  export interface ab_camp_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['ab_camp_user'], meta: { name: 'ab_camp_user' } }
    /**
     * Find zero or one Ab_camp_user that matches the filter.
     * @param {ab_camp_userFindUniqueArgs} args - Arguments to find a Ab_camp_user
     * @example
     * // Get one Ab_camp_user
     * const ab_camp_user = await prisma.ab_camp_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ab_camp_userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ab_camp_userFindUniqueArgs<ExtArgs>>
    ): Prisma__ab_camp_userClient<$Result.GetResult<$ab_camp_userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ab_camp_user that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ab_camp_userFindUniqueOrThrowArgs} args - Arguments to find a Ab_camp_user
     * @example
     * // Get one Ab_camp_user
     * const ab_camp_user = await prisma.ab_camp_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ab_camp_userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_camp_userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ab_camp_userClient<$Result.GetResult<$ab_camp_userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ab_camp_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_camp_userFindFirstArgs} args - Arguments to find a Ab_camp_user
     * @example
     * // Get one Ab_camp_user
     * const ab_camp_user = await prisma.ab_camp_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ab_camp_userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_camp_userFindFirstArgs<ExtArgs>>
    ): Prisma__ab_camp_userClient<$Result.GetResult<$ab_camp_userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ab_camp_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_camp_userFindFirstOrThrowArgs} args - Arguments to find a Ab_camp_user
     * @example
     * // Get one Ab_camp_user
     * const ab_camp_user = await prisma.ab_camp_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ab_camp_userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_camp_userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ab_camp_userClient<$Result.GetResult<$ab_camp_userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ab_camp_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_camp_userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ab_camp_users
     * const ab_camp_users = await prisma.ab_camp_user.findMany()
     * 
     * // Get first 10 Ab_camp_users
     * const ab_camp_users = await prisma.ab_camp_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ab_camp_userWithIdOnly = await prisma.ab_camp_user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ab_camp_userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_camp_userFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$ab_camp_userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ab_camp_user.
     * @param {ab_camp_userCreateArgs} args - Arguments to create a Ab_camp_user.
     * @example
     * // Create one Ab_camp_user
     * const Ab_camp_user = await prisma.ab_camp_user.create({
     *   data: {
     *     // ... data to create a Ab_camp_user
     *   }
     * })
     * 
    **/
    create<T extends ab_camp_userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ab_camp_userCreateArgs<ExtArgs>>
    ): Prisma__ab_camp_userClient<$Result.GetResult<$ab_camp_userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ab_camp_users.
     *     @param {ab_camp_userCreateManyArgs} args - Arguments to create many Ab_camp_users.
     *     @example
     *     // Create many Ab_camp_users
     *     const ab_camp_user = await prisma.ab_camp_user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ab_camp_userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_camp_userCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ab_camp_user.
     * @param {ab_camp_userDeleteArgs} args - Arguments to delete one Ab_camp_user.
     * @example
     * // Delete one Ab_camp_user
     * const Ab_camp_user = await prisma.ab_camp_user.delete({
     *   where: {
     *     // ... filter to delete one Ab_camp_user
     *   }
     * })
     * 
    **/
    delete<T extends ab_camp_userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ab_camp_userDeleteArgs<ExtArgs>>
    ): Prisma__ab_camp_userClient<$Result.GetResult<$ab_camp_userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ab_camp_user.
     * @param {ab_camp_userUpdateArgs} args - Arguments to update one Ab_camp_user.
     * @example
     * // Update one Ab_camp_user
     * const ab_camp_user = await prisma.ab_camp_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ab_camp_userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ab_camp_userUpdateArgs<ExtArgs>>
    ): Prisma__ab_camp_userClient<$Result.GetResult<$ab_camp_userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ab_camp_users.
     * @param {ab_camp_userDeleteManyArgs} args - Arguments to filter Ab_camp_users to delete.
     * @example
     * // Delete a few Ab_camp_users
     * const { count } = await prisma.ab_camp_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ab_camp_userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_camp_userDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ab_camp_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_camp_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ab_camp_users
     * const ab_camp_user = await prisma.ab_camp_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ab_camp_userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ab_camp_userUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ab_camp_user.
     * @param {ab_camp_userUpsertArgs} args - Arguments to update or create a Ab_camp_user.
     * @example
     * // Update or create a Ab_camp_user
     * const ab_camp_user = await prisma.ab_camp_user.upsert({
     *   create: {
     *     // ... data to create a Ab_camp_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ab_camp_user we want to update
     *   }
     * })
    **/
    upsert<T extends ab_camp_userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ab_camp_userUpsertArgs<ExtArgs>>
    ): Prisma__ab_camp_userClient<$Result.GetResult<$ab_camp_userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ab_camp_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_camp_userCountArgs} args - Arguments to filter Ab_camp_users to count.
     * @example
     * // Count the number of Ab_camp_users
     * const count = await prisma.ab_camp_user.count({
     *   where: {
     *     // ... the filter for the Ab_camp_users we want to count
     *   }
     * })
    **/
    count<T extends ab_camp_userCountArgs>(
      args?: Subset<T, ab_camp_userCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ab_camp_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ab_camp_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ab_camp_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ab_camp_userAggregateArgs>(args: Subset<T, Ab_camp_userAggregateArgs>): PrismaPromise<GetAb_camp_userAggregateType<T>>

    /**
     * Group by Ab_camp_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_camp_userGroupByArgs} args - Group by arguments.
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
      T extends ab_camp_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ab_camp_userGroupByArgs['orderBy'] }
        : { orderBy?: ab_camp_userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ab_camp_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAb_camp_userGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the ab_camp_user model
   */
  readonly fields: ab_camp_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ab_camp_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ab_camp_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the ab_camp_user model
   */ 
  interface ab_camp_userFieldRefs {
    readonly id: FieldRef<"ab_camp_user", 'Int'>
    readonly domain: FieldRef<"ab_camp_user", 'String'>
    readonly props: FieldRef<"ab_camp_user", 'Json'>
    readonly groups: FieldRef<"ab_camp_user", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * ab_camp_user findUnique
   */
  export type ab_camp_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_user
     */
    select?: ab_camp_userSelect<ExtArgs> | null
    /**
     * Filter, which ab_camp_user to fetch.
     */
    where: ab_camp_userWhereUniqueInput
  }


  /**
   * ab_camp_user findUniqueOrThrow
   */
  export type ab_camp_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_user
     */
    select?: ab_camp_userSelect<ExtArgs> | null
    /**
     * Filter, which ab_camp_user to fetch.
     */
    where: ab_camp_userWhereUniqueInput
  }


  /**
   * ab_camp_user findFirst
   */
  export type ab_camp_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_user
     */
    select?: ab_camp_userSelect<ExtArgs> | null
    /**
     * Filter, which ab_camp_user to fetch.
     */
    where?: ab_camp_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ab_camp_users to fetch.
     */
    orderBy?: ab_camp_userOrderByWithRelationInput | ab_camp_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ab_camp_users.
     */
    cursor?: ab_camp_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ab_camp_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ab_camp_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ab_camp_users.
     */
    distinct?: Ab_camp_userScalarFieldEnum | Ab_camp_userScalarFieldEnum[]
  }


  /**
   * ab_camp_user findFirstOrThrow
   */
  export type ab_camp_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_user
     */
    select?: ab_camp_userSelect<ExtArgs> | null
    /**
     * Filter, which ab_camp_user to fetch.
     */
    where?: ab_camp_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ab_camp_users to fetch.
     */
    orderBy?: ab_camp_userOrderByWithRelationInput | ab_camp_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ab_camp_users.
     */
    cursor?: ab_camp_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ab_camp_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ab_camp_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ab_camp_users.
     */
    distinct?: Ab_camp_userScalarFieldEnum | Ab_camp_userScalarFieldEnum[]
  }


  /**
   * ab_camp_user findMany
   */
  export type ab_camp_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_user
     */
    select?: ab_camp_userSelect<ExtArgs> | null
    /**
     * Filter, which ab_camp_users to fetch.
     */
    where?: ab_camp_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ab_camp_users to fetch.
     */
    orderBy?: ab_camp_userOrderByWithRelationInput | ab_camp_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ab_camp_users.
     */
    cursor?: ab_camp_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ab_camp_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ab_camp_users.
     */
    skip?: number
    distinct?: Ab_camp_userScalarFieldEnum | Ab_camp_userScalarFieldEnum[]
  }


  /**
   * ab_camp_user create
   */
  export type ab_camp_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_user
     */
    select?: ab_camp_userSelect<ExtArgs> | null
    /**
     * The data needed to create a ab_camp_user.
     */
    data: XOR<ab_camp_userCreateInput, ab_camp_userUncheckedCreateInput>
  }


  /**
   * ab_camp_user createMany
   */
  export type ab_camp_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ab_camp_users.
     */
    data: ab_camp_userCreateManyInput | ab_camp_userCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ab_camp_user update
   */
  export type ab_camp_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_user
     */
    select?: ab_camp_userSelect<ExtArgs> | null
    /**
     * The data needed to update a ab_camp_user.
     */
    data: XOR<ab_camp_userUpdateInput, ab_camp_userUncheckedUpdateInput>
    /**
     * Choose, which ab_camp_user to update.
     */
    where: ab_camp_userWhereUniqueInput
  }


  /**
   * ab_camp_user updateMany
   */
  export type ab_camp_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ab_camp_users.
     */
    data: XOR<ab_camp_userUpdateManyMutationInput, ab_camp_userUncheckedUpdateManyInput>
    /**
     * Filter which ab_camp_users to update
     */
    where?: ab_camp_userWhereInput
  }


  /**
   * ab_camp_user upsert
   */
  export type ab_camp_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_user
     */
    select?: ab_camp_userSelect<ExtArgs> | null
    /**
     * The filter to search for the ab_camp_user to update in case it exists.
     */
    where: ab_camp_userWhereUniqueInput
    /**
     * In case the ab_camp_user found by the `where` argument doesn't exist, create a new ab_camp_user with this data.
     */
    create: XOR<ab_camp_userCreateInput, ab_camp_userUncheckedCreateInput>
    /**
     * In case the ab_camp_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ab_camp_userUpdateInput, ab_camp_userUncheckedUpdateInput>
  }


  /**
   * ab_camp_user delete
   */
  export type ab_camp_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_user
     */
    select?: ab_camp_userSelect<ExtArgs> | null
    /**
     * Filter which ab_camp_user to delete.
     */
    where: ab_camp_userWhereUniqueInput
  }


  /**
   * ab_camp_user deleteMany
   */
  export type ab_camp_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ab_camp_users to delete
     */
    where?: ab_camp_userWhereInput
  }


  /**
   * ab_camp_user without action
   */
  export type ab_camp_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_camp_user
     */
    select?: ab_camp_userSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type ab_camp_userWhereInput = {
    AND?: ab_camp_userWhereInput | ab_camp_userWhereInput[]
    OR?: ab_camp_userWhereInput[]
    NOT?: ab_camp_userWhereInput | ab_camp_userWhereInput[]
    id?: IntFilter<"ab_camp_user"> | number
    domain?: StringFilter<"ab_camp_user"> | string
    props?: JsonFilter<"ab_camp_user">
    groups?: JsonFilter<"ab_camp_user">
  }

  export type ab_camp_userOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type ab_camp_userWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: ab_camp_userWhereInput | ab_camp_userWhereInput[]
    OR?: ab_camp_userWhereInput[]
    NOT?: ab_camp_userWhereInput | ab_camp_userWhereInput[]
    props?: JsonFilter<"ab_camp_user">
    groups?: JsonFilter<"ab_camp_user">
  }, "id" | "domain">

  export type ab_camp_userOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: ab_camp_userCountOrderByAggregateInput
    _avg?: ab_camp_userAvgOrderByAggregateInput
    _max?: ab_camp_userMaxOrderByAggregateInput
    _min?: ab_camp_userMinOrderByAggregateInput
    _sum?: ab_camp_userSumOrderByAggregateInput
  }

  export type ab_camp_userScalarWhereWithAggregatesInput = {
    AND?: ab_camp_userScalarWhereWithAggregatesInput | ab_camp_userScalarWhereWithAggregatesInput[]
    OR?: ab_camp_userScalarWhereWithAggregatesInput[]
    NOT?: ab_camp_userScalarWhereWithAggregatesInput | ab_camp_userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ab_camp_user"> | number
    domain?: StringWithAggregatesFilter<"ab_camp_user"> | string
    props?: JsonWithAggregatesFilter<"ab_camp_user">
    groups?: JsonWithAggregatesFilter<"ab_camp_user">
  }

  export type ab_camp_userCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_camp_userUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_camp_userUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_camp_userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_camp_userCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_camp_userUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_camp_userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_camp_userCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type ab_camp_userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ab_camp_userMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type ab_camp_userMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type ab_camp_userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ab_camp_userDefaultArgs instead
     */
    export type ab_camp_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ab_camp_userDefaultArgs<ExtArgs>

    export const Ab_camp_userScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Ab_camp_userScalarFieldEnum = (typeof Ab_camp_userScalarFieldEnum)[keyof typeof Ab_camp_userScalarFieldEnum]
    